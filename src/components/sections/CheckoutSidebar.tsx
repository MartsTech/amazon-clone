import { selectItems, selectItemsCount, selectTotal } from "@slice/basketSlice";
import { useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { reqBodyType } from "@type/reqBodyType";

interface CheckoutSidebarProps {}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutSidebar: React.FC<CheckoutSidebarProps> = ({}) => {
  const itemsCount = useSelector(selectItemsCount);
  const totalPrice = useSelector(selectTotal);
  const items = useSelector(selectItems);
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: session?.user?.email as string,
    } as reqBodyType);

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
      alert(result.error.message);
    }
  };

  return (
    <>
      {itemsCount > 0 && (
        <div className="flex flex-col bg-white p-10 shadow-md">
          <h2 className="whitespace-nowrap">
            Subtotal ({itemsCount} items):{" "}
            <span className="font-bold">
              <Currency quantity={totalPrice} currency="EUR" />
            </span>
          </h2>

          <button
            role="link"
            onClick={createCheckoutSession}
            disabled={!session}
            className={`button mt-2 ${
              !session &&
              "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>
        </div>
      )}
    </>
  );
};

export default CheckoutSidebar;
