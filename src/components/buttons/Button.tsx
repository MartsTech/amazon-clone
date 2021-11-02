import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary" | "outlined" | "red";
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
      disabled={disabled}
      className={`py-3 px-6 text-white border-none rounded-lg
       font-bold transition-all duration-200 transform flex
       items-center justify-center focus:outline-none
       active:scale-95
    ${disabled && "opacity-50 hover:scale-100 "}
    ${className} ${
        variant == "primary"
          ? "bg-[#f90] hover:scale-105"
          : variant == "secondary"
          ? "bg-[#1a1a2c]"
          : variant == "outlined"
          ? "bg-none text-gray-400 font-medium !border-2 !border-solid !border-gray-300"
          : variant === "red"
          ? "bg-[#dc143c] text-white border-none h-6 rounded-md ml-2"
          : "none"
      }`}
      style={{
        boxShadow:
          variant == "primary"
            ? "0 0.5rem 1rem rgba(255, 153, 0, 0.25)"
            : variant == "secondary"
            ? "0 0.5rem 1rem rgba(26, 26, 44, 0.25)"
            : "0 0.5rem 1rem rgba(26, 26, 44, 0.1)",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
