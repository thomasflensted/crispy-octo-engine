import type { HTMLInputTypeAttribute, ReactNode } from "react";

type Props = {
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | "textarea";
  label: string;
};

const Input = ({ id, placeholder, label, type = "text" }: Props) => {
  const inputClasses = "block w-full border shadow rounded py-2 px-3 font-light text-sm outline-none placeholder:text-gray-400 resize-none";
  const Container = ({ children }: { children: ReactNode }) => (
    <label className="text-xs block" htmlFor={id}>
      <span className="mb-0.5 block">{label}</span>
      {children}
    </label>
  );

  if (type === "textarea") {
    return (
      <Container>
        <textarea id={id} placeholder={placeholder} className={inputClasses} rows={5} />
      </Container>
    );
  }

  return (
    <Container>
      <input id={id} placeholder={placeholder} className={inputClasses} type={type} />
    </Container>
  );
};
export default Input;
