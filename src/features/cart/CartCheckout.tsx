import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import Button from "components/buttons/Button";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import { errorAnimation } from "utils/animations";

interface CartCheckoutProps {}

const CartCheckout: React.FC<CartCheckoutProps> = () => {
  const { cartTotal, cartTotalItems } = useStore().cartStore;
  const [session] = useSession();
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-lg shadow-md items-start p-6 md:p-8
    flex-[50%] mb-12 md:mt-0"
    >
      <h5 className="font-semibold text-xl">Checkout</h5>
      {cartTotal > 25 && (
        <motion.p
          initial="initial"
          animate="in"
          exit="out"
          variants={errorAnimation}
          className="bg-[#00c800] bg-opacity-25 text-[#2e8b57]
          py-1 px-2 my-4 rounded-md flex items-center"
        >
          <DoneAllRoundedIcon className="mr-2 !text-base" />
          Your order is eligible for Free Delivery
        </motion.p>
      )}
      <p className="text-2xl font-black mt-8 mb-1">Sub-Total: ${cartTotal}</p>
      <p>Number of items: {cartTotalItems}</p>
      <p style={{ opacity: 0.5 }}>
        This price is exclusive of taxes. GST will be added during checkout.
      </p>
      <div className="mt-4">
        <Button
          onClick={() =>
            session ? router.push("/payment") : router.push("/auth/login")
          }
          variant="primary"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default observer(CartCheckout);
