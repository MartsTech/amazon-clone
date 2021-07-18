import { motion } from "framer-motion";
import { useSession } from "next-auth/client";
import React from "react";
import { useStore } from "stores/store";
import { pageSlide, pageTransition } from "utils/animations";
import PaymentMethod from "./method/PaymentMethod";
import PaymentSuccessSummary from "./summary/PaymentSuccessSummary";
import PaymentSummary from "./summary/PaymentSummary";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const { succeeded } = useStore().paymentStore;
  const [session] = useSession();

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
        {!succeeded ? <PaymentSummary /> : <PaymentSuccessSummary />}
      </div>
    </motion.div>
  );
};

export default PaymentPage;
