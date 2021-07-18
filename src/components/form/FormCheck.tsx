import { useField } from "formik";
import styles from "styles/form.module.css";

interface FormCheckProps {
  name: string;
  label: string;
  type: "checkbox" | "radio";
  onClick: () => void;
}

const FormCheck: React.FC<FormCheckProps> = ({
  name,
  label,
  type,
  onClick,
}) => {
  const [field, { value }] = useField(name);

  return (
    <div className={`relative mt-4 flex ${styles.check}`} onClick={onClick}>
      <input {...field} type={type} name={name} checked={value} />
      <label className="text-base" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FormCheck;
