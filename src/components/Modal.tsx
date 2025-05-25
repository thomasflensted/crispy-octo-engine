type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Modal = ({ isOpen, setIsOpen }: Props) => {
  console.debug({ isOpen, setIsOpen });
  return (
    <div className="fixed inset-0 w-full h-full bg-black/15 backdrop-blur-xs" />
  );
};
export default Modal;
