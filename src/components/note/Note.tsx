import { IoMenu } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import type { ReactNode } from "react";
import { noteColors } from "../../constants/colors";

type Props = {
  heading: string;
  hideOptions?: boolean;
  children?: ReactNode;
  backgroundColor?: string;
};

const Note = ({ heading, hideOptions, children, backgroundColor = noteColors.green }: Props) => {
  const topClasses = `border-b flex py-2 font-semibold items-center px-4 ${hideOptions ? "justify-center" : "justify-between"}`;

  return (
    <div className="border bg-white shadow rounded overflow-hidden">
      <div className={topClasses} style={{ backgroundColor }}>
        {!hideOptions && <IoMenu className="text-base" />}
        <h3 className="">{heading}</h3>
        {!hideOptions && <FaEdit className="text-base" />}
      </div>
      <div className="p-4 text-sm">{children}</div>
    </div>
  );
};
export default Note;
