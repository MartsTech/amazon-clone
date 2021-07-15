import { ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { errorAnimation } from "utils/animations";

interface FormErrorProps {
  error?: string;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
  return (
    <ErrorMessage
      name="error"
      render={() => (
        <motion.p
          initial="initial"
          animate="in"
          exit="out"
          variants={errorAnimation}
          className="py-2 px-4 text-[#dc143c] text-sm 
          bg-[rgba(255,0,0,.05)] rounded-lg w-full max-w-xs
          overflow-ellipsis overflow-hidden"
        >
          {error}
        </motion.p>
      )}
    />
  );
};

export default FormError;
