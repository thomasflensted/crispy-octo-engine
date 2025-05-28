import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = {
  label: string;
  onClick: () => void;
  theme?: "default" | "warning";
  icon?: ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button = ({ label, onClick, disabled, icon, theme = "default", type = "button" }: Props) => {
  const commonStyles = "border w-full shadow py-2 font-medium text-sm rounded cursor-pointer flex gap-2 justify-center items-center";
  const warningStyle = theme === "warning" ? "bg-white border-red-600 text-red-600 hover:bg-red-50" : "";
  const defaultStyle = theme === "default" ? "bg-white text-black hover:bg-gray-100" : "";
  const disabledStyle = disabled ? "text-gray-200" : "";

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button type={type} onClick={handleClick} className={`${disabledStyle} ${commonStyles} ${defaultStyle} ${warningStyle}`}>
      {icon && icon}
      {label}
    </button>
  );
};
export default Button;
