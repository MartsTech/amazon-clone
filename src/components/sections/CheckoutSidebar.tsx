import { selectItemsCount, selectTotal } from "@slice/basketSlice";
import { useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

interface CheckoutSidebarProps {}

const CheckoutSidebar: React.FC<CheckoutSidebarProps> = ({}) => {
  const itemsCount = useSelector(selectItemsCount);
  const totalPrice = useSelector(selectTotal);
  const [session] = useSession();

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
