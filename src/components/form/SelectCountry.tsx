import { useField } from "formik";
import { motion } from "framer-motion";
import { errorAnimation } from "utils/animations";
import { countries } from "utils/data";

interface SelectCountryProps {
  name: string;
  label: string;
  type: string;
}

const SelectCountry: React.FC<SelectCountryProps> = ({
  name,
  label,
  ...props
}) => {
  const [field, { touched, error, value }] = useField(name);

  return (
    <div className="relative mt-4 group">
      <select
        {...field}
        {...props}
        name={name}
        className={`border-none
        bg-[#fafafa] rounded-lg pt-6 pb-2 px-3 shadow-inner drop-shadow-md
        outline-none w-80 font-bold transition-all duration-200 focus:shadow-md
        hover:shadow-lg active:shadow-lg ${error && "ring-1 ring-[#dc143c]"}`}
      >
        <option selected value="" />
        {countries.map((item, index) => (
          <option key={index} value={item.abbreviation}>
            {item.country}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className={`absolute left-4 top-4 text-base opacity-75
          transition-all duration-200 group-focus-within:active__label
          group-hover:active__label group-active:active__label ${
            value != "" && "active__label"
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
    </div>
  );
};

export default SelectCountry;
