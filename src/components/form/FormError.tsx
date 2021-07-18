import { ErrorMessage } from "formik";
import { motion } from "framer-motion";
import { errorAnimation } from "utils/animations";
import { successMessages } from "utils/data";

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
          className={`py-2 px-4 text-[#dc143c] text-sm
          bg-[#ff0000] bg-opacity-5 rounded-lg w-full max-w-xs
          overflow-ellipsis overflow-hidden ${
            error &&
            successMessages.some((message) => message === error) &&
            "!bg-[#00c800] !bg-opacity-25 !text-[#2e8b57]"
          }`}
        >
          {error}
        </motion.p>
      )}
    />
  );
};

export default FormError;
