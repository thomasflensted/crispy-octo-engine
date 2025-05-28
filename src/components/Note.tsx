import { IoMenu } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import type { ReactNode } from "react";

type Props = {
  heading: string;
  hideOptions?: boolean;
  children?: ReactNode;
};

const Note = ({ heading, hideOptions, children }: Props) => {
  return (
    <div className="border bg-white shadow rounded overflow-hidden">
      <div className="border-b flex py-2 justify-between font-semibold bg-emerald-100/50 items-center px-4">
        {!hideOptions && <IoMenu className="text-base" />}
        <h3>{heading}</h3>
        {!hideOptions && <FaEdit className="text-base" />}
      </div>
      <div className="p-4 text-sm">{children}</div>
    </div>
  );
};
export default Note;
