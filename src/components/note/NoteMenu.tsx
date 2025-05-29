import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useMenuPosition } from "../../hooks/useMenuPosition";

type Props = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  mousePosition: { x: number; y: number };
};

const NoteMenu = ({ isVisible, setIsVisible, mousePosition }: Props) => {
  const ref = useRef(null!);
  useOnClickOutside(ref, () => setIsVisible(false));
  const position = useMenuPosition(mousePosition);
  const listClasses = "w-full px-2 py-1 hover:bg-gray-100 rounded text-xs font-normal cursor-pointer whitespace-nowrap transition duration-200";
  const separatorClasses = "w-11/12 mx-auto border-b border-black/15";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          style={position}
          className={`absolute bg-white shadow rounded`}>
          <ul className="flex flex-col gap-1 p-1 items-start">
            <li className={listClasses}>Bring forward</li>
            <li className={listClasses}>Bring to front</li>
            <div className={separatorClasses} />
            <li className={listClasses}>Send backward</li>
            <li className={listClasses}>Send to back</li>
            <div className={separatorClasses} />
            <li className={listClasses}>Duplicate</li>
            <div className={separatorClasses} />
            <li className={`${listClasses} text-red-500 hover:bg-red-50`}>Delete</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NoteMenu;
