import styles from "styles/form.module.css";

interface FormCheckProps {
  name: string;
  label: string;
  type: "checkbox" | "radio";
  value: boolean;
  onClick: () => void;
}

const FormCheck: React.FC<FormCheckProps> = ({
  name,
  label,
  type,
  value,
  onClick,
}) => {
  return (
    <div className={`relative mt-4 flex ${styles.check}`} onClick={onClick}>
      <input type={type} name={name} checked={value} readOnly />
      <label className="text-base" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default FormCheck;
