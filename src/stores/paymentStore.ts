import { loadStripe, StripeCardElementChangeEvent } from "@stripe/stripe-js";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { store } from "./store";

class PaymentStore {
  stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  paymentMethod = "card";
  processing = false;
  succeeded = false;
  disabled = false;
  cardHolder = "";
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCardHolder = (name: string) => {
    this.cardHolder = name;
  };

  handleCardChange = (e: StripeCardElementChangeEvent) => {
    this.disabled = e.empty;
    this.error = e.error ? e.error.message : null;
  };

  createCheckoutSession = async (email: string) => {
    const items = store.cartStore.cart;

    if (items.length === 0) {
      toast.error("Your cart is empty! Please select items to purchase.", {});
      return;
    }

    store.commonStore.setAppLoading(true);

    const stripe = await this.stripePromise;

    const checkoutSession = await axios.post(`/api/create-checkout-session`, {
      items,
      email,
    });

    store.cartStore.clearCart();

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
      toast.error(result.error.message);
    }

    store.commonStore.setAppLoading(false);
  };
}

export default PaymentStore;
