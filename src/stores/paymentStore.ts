import { addDoc, collection, doc, serverTimestamp } from "@firebase/firestore";
import { CardElement } from "@stripe/react-stripe-js";
import {
  Stripe,
  StripeCardElement,
  StripeCardElementChangeEvent,
  StripeElements,
} from "@stripe/stripe-js";
import axios from "axios";
import { db } from "configs/firebase";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";

class PaymentStore {
  stripe: Stripe | null = null;
  stripeElements: StripeElements | null = null;
  paymentMethod: "card" | "cash" = "card";
  cardHolder = "";
  clientSecret: string | null = null;
  orderId: string | null = null;
  error: string | null = null;
  processing = false;
  disabled = false;
  success = false;

  constructor() {
    makeAutoObservable(this);
  }

  createNewPayment = async () => {
    const desc = store.cartStore.cart.map(
      (item) =>
        `${item.title.replaceAll(" ", "").substring(0, 15)}_${item.quantity}`
    );

    axios
      .post(`/api/create-new-payment`, {
        total: store.cartStore.cartTotal,
        desc,
      })
      .then((res) => {
        runInAction(() => {
          this.clientSecret = res.data.clientSecret;
          this.orderId = res.data.id;
        });
      })
      .catch(() => {
        runInAction(() => {
          this.error = "Some error occurred. Try again later.";
          this.orderId = "Error";
        });
      });
  };

  createCheckoutSession = async () => {
    if (!this.stripe) {
      this.error = "An error occurred. Please try again.";
      return;
    }

    const items = store.cartStore.cart;

    if (items.length === 0) {
      this.error = "Your cart is empty! Please select items to purchase.";
      return;
    }

    const userDetails = store.userStore.userDetails;

    if (!userDetails) {
      this.error = "Please update your shipping details";
      return;
    }

    if (!this.orderId) {
      this.error = "Your order id is missing. Please try again.";
      return;
    }

    store.commonStore.setAppLoading(true);
    this.processing = true;

    axios
      .post(`/api/create-checkout-session`, {
        items,
        userDetails,
        orderId: this.orderId,
      })
      .then((res) => {
        if (res.data.error) {
          runInAction(() => {
            this.error = res.data.error.message;
          });
        } else {
          this.stripe?.redirectToCheckout({
            sessionId: res.data.id,
          });
        }
      })
      .catch((err) => {
        runInAction(() => {
          this.error = err.message;
        });
      });

    this.processing = false;
    store.commonStore.setAppLoading(false);
  };

  checkout = () => {
    if (store.cartStore.cart.length === 0) {
      this.error = "Your cart is empty! Please select items to purchase.";
      return;
    }

    if (this.paymentMethod === "card") {
      this.checkoutCard();
    } else {
      this.checkoutCash();
    }
  };

  private checkoutCard = async () => {
    if (!this.stripe || !this.stripeElements || !this.clientSecret) {
      this.error = "An error occurred. Please try again.";
      return;
    }

    const userDetails = store.userStore.userDetails;

    if (!userDetails) {
      this.error = "Please update your shipping details";
      return;
    }

    store.commonStore.setAppLoading(true);
    this.processing = true;

    this.stripeElements.getElement(CardElement)?.update({ disabled: true });

    await this.stripe
      .confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: this.stripeElements.getElement(
            CardElement
          ) as StripeCardElement,
          billing_details: {
            name: this.cardHolder,
            phone: userDetails.phone,
            email: userDetails.email,
            address: {
              line1: userDetails.address,
              state: userDetails.state,
              country: userDetails.country,
              postal_code: userDetails.zip,
            },
          },
        },
        receipt_email: userDetails.email,
      })
      .then((res) => {
        if (res.error) {
          runInAction(() => {
            this.error = res.error.message as string;
          });

          this.stripeElements!.getElement(CardElement)!.update({
            disabled: false,
          });
        } else if (
          res.paymentIntent &&
          res.paymentIntent.status === "succeeded"
        ) {
          store.userStore.updateUserOrders(
            res.paymentIntent.id,
            res.paymentIntent.amount / 100,
            res.paymentIntent.created,
            store.cartStore.cart
          );

          runInAction(() => {
            this.success = true;
            this.error = null;
            this.disabled = false;
          });

          setTimeout(() => {
            store.cartStore.clearCart();
          }, 2000);
        }
      });

    this.processing = false;
    store.commonStore.setAppLoading(false);
  };

  private checkoutCash = () => {
    const userDetails = store.userStore.userDetails;

    if (!userDetails) {
      this.error = "Please update your shipping details";
      return;
    }

    addDoc(collection(doc(db, "users", userDetails.email), "orders"), {
      created: serverTimestamp(),
      amount: (
        store.cartStore.cartTotal +
        store.cartStore.cartTotal * 0.05 +
        6.99
      ).toFixed(2),
      items: store.cartStore.cart,
      type: "cash",
    }).then(() => {
      runInAction(() => {
        this.success = true;
        this.error = null;
        this.disabled = false;
      });

      setTimeout(() => {
        store.cartStore.clearCart();
      }, 2000);
    });

    this.processing = false;
    store.commonStore.setAppLoading(false);
  };

  handleCardChange = (e: StripeCardElementChangeEvent) => {
    this.disabled = e.empty;
    this.error = e.error ? e.error.message : null;
  };

  setStripe = (stripe: Stripe) => {
    this.stripe = stripe;
  };

  setStripeElements = (elements: StripeElements) => {
    this.stripeElements = elements;
  };

  setPaymentMethod = (method: "card" | "cash") => {
    this.paymentMethod = method;
  };

  setCardHolder = (name: string) => {
    this.cardHolder = name;
  };
}

export default PaymentStore;
