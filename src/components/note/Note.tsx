import { IoMenu } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { useState, type ReactNode } from "react";
import { noteColors } from "../../constants/colors";
import NoteMenu from "./NoteMenu";

type Props = {
  heading: string;
  hideOptions?: boolean;
  children?: ReactNode;
  backgroundColor?: string;
  containerClasses?: string;
};

const Note = ({ heading, hideOptions, children, backgroundColor = noteColors.green, containerClasses }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const topClasses = `border-b flex py-2 font-semibold items-center px-4 rounded-t ${hideOptions ? "justify-center" : "justify-between"}`;

  const handleEditClick = () => {};
  const handleMenuClick = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setShowMenu(!showMenu);
  };

  return (
    <div className={`border bg-white shadow rounded ${containerClasses}`}>
      <div className={topClasses} style={{ backgroundColor }}>
        {!hideOptions && (
          <div className="relative">
            <IoMenu onClick={handleMenuClick} className="text-base" />
            <NoteMenu mousePosition={mousePosition} setIsVisible={setShowMenu} isVisible={showMenu} />
          </div>
        )}
        <h3 className="select-none">{heading}</h3>
        {!hideOptions && <FaEdit onClick={handleEditClick} className="text-base" />}
      </div>
      <div className="p-4 text-sm select-none">{children}</div>
    </div>
  );
};
export default Note;
