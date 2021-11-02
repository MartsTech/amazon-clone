import { motion } from "framer-motion";
import { errorAnimation } from "utils/animations";

interface PaymentErrorProps {
  error: string;
}

const PaymentError: React.FC<PaymentErrorProps> = ({ error }) => {
  return (
    <motion.p
      initial="initial"
      animate="in"
      exit="out"
      variants={errorAnimation}
      className="py-2 px-4 text-[#dc143c] bg-[#ff0000] 
      bg-opacity-5 rounded-lg text-sm -mt-4 mb-12 mx-4"
      style={{ width: "calc(100% - 2rem)" }}
    >
      {error}
    </motion.p>
  );
};

export default PaymentError;
