import Modal from "./Modal";
import Button from "./Button";
import Note from "../Note";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const AboutModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Note heading="About" hideOptions>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vitae earum amet recusandae eum ullam explicabo? Molestias error
          accusantium deserunt debitis animi dolor, ducimus odit veniam
          consequuntur distinctio dolore pariatur, doloribus assumenda deleniti,
          quia necessitatibus commodi fuga ipsam enim dolores!
        </p>
        <div className="mt-2">
          <Button label="Close" onClick={() => setIsOpen(false)} />
        </div>
      </Note>
    </Modal>
  );
};
export default AboutModal;
