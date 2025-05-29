import type { ReactNode } from "react";

type Props<T extends object> = {
  children: ReactNode;
  label: string;
  id: keyof T extends string ? keyof T : never;
  error?: string;
};

const InputContainer = <T extends object>({ children, label, id, error }: Props<T>) => (
  <label className="text-xs block" htmlFor={id}>
    <span className="mb-0.5 block">{label}</span>
    {children}
    {error && <span className="text-red-500 text-xs mt-1 block text-light">{error}</span>}
  </label>
);

export default InputContainer;
