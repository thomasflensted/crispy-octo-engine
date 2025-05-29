import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, setIsOpen, children, onClose }: Props) => {
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 w-full h-full bg-black/5 backdrop-blur-xs flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-10/12 sm:8/12 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
