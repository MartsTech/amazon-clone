import { motion } from "framer-motion";
import { useSession } from "next-auth/client";
import { pageSlide, pageTransition } from "utils/animations";
import PaymentMethod from "./PaymentMethod";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const [session] = useSession();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
      className="p-12 pt-20 max-w-screen-lg mx-auto"
    >
      <h4 className="font-semibold text-2xl mb-12">
        Complete your Order, {session?.user?.name?.split(" ", 1)}!
      </h4>
      <div className="flex">
        <PaymentMethod />
      </div>
    </motion.div>
  );
};

export default PaymentPage;
