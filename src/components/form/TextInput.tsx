import { useField } from "formik";
import { motion } from "framer-motion";
import { errorAnimation } from "utils/animations";

interface TextFieldProps {
  name: string;
  label: string;
  type: string;
  Icon?: JSX.Element;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  type,
  Icon,
  ...props
}) => {
  const [field, { touched, error, value }] = useField(name);

  return (
    <div className="relative mt-4 group">
      <input
        {...field}
        {...props}
        type={type}
        name={name}
        className={`border-none
      bg-[#fafafa] rounded-lg pt-6 pb-2 px-3 shadow-inner drop-shadow-md
      outline-none w-80 font-bold transition-all duration-200 focus:shadow-md
      hover:shadow-lg active:shadow-lg ${
        touched && error && "ring-1 ring-[#dc143c]"
      }`}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-4 text-base opacity-75
        transition-all duration-200 group-focus-within:active__label
        group-hover:active__label group-active:active__label ${
          (value != "" || type == "date") && "active__label"
        }`}
      >
        {label}
      </label>

      {touched && error && (
        <motion.p
          initial="initial"
          animate="in"
          exit="out"
          variants={errorAnimation}
          className="py-1 px-2 text-[#dc143c] text-sm"
        >
          {error}
        </motion.p>
      )}
      {Icon}
    </div>
  );
};

export default TextField;
