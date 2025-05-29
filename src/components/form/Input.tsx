import type { HTMLInputTypeAttribute } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";
import InputContainer from "./InputContainer";

type Props<T extends object> = {
  id: keyof T extends string ? keyof T : never;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | "textarea";
  label: string;
  error?: string;
} & UseFormRegisterReturn;

const Input = <T extends object>({ id, placeholder, type, label, error, ...registerProps }: Props<T>) => {
  const inputClasses = "block w-full border shadow rounded py-2 px-3 font-light text-sm outline-none placeholder:text-gray-400 resize-none";

  if (type === "textarea") {
    return (
      <InputContainer id={id} label={label} error={error}>
        <textarea {...registerProps} id={id} placeholder={placeholder} className={inputClasses} rows={5} />
      </InputContainer>
    );
  }

  return (
    <InputContainer id={id} label={label} error={error}>
      <input {...registerProps} id={id} placeholder={placeholder} className={inputClasses} type={type} />
    </InputContainer>
  );
};

export default Input;
