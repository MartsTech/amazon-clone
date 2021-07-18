import { useElements, useStripe } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useStore } from "stores/store";
import { pageSlide, pageTransition } from "utils/animations";
import PaymentMethod from "./method/PaymentMethod";
import PaymentSuccessSummary from "./summary/PaymentSuccessSummary";
import PaymentSummary from "./summary/PaymentSummary";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const { success, setStripe, setStripeElements } = useStore().paymentStore;
  const stripe = useStripe();
  const stripeElements = useElements();
  const [session] = useSession();

  useEffect(() => {
    if (stripe) {
      setStripe(stripe);
    }
  }, [stripe, setStripe]);

  useEffect(() => {
    if (stripeElements) {
      setStripeElements(stripeElements);
    }
  }, [stripeElements, setStripeElements]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
      className="p-12 pt-20 w-full max-w-screen-lg mx-auto"
    >
      <h4 className="font-semibold text-2xl mb-12">
        Complete your Order, {session?.user?.name?.split(" ", 1)}!
      </h4>
      <div className="w-full flex">
        <PaymentMethod />
        {!success ? <PaymentSummary /> : <PaymentSuccessSummary />}
      </div>
    </motion.div>
  );
};

export default observer(PaymentPage);
