import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary" | "outlined";
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`py-3 px-6 text-white border-none rounded-lg
       font-bold transition-all duration-200 transform flex
       items-center justify-center focus:outline-none
       active:scale-95
    ${disabled && "opacity-50"}
    ${className} ${
        variant == "primary"
          ? "bg-[#f90] hover:scale-105"
          : variant == "secondary"
          ? "bg-[#1a1a2c]"
          : "bg-none text-gray-400 font-medium !border-2 !border-solid !border-gray-300 shadow-lg "
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
