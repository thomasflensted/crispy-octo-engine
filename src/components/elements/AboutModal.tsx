import Modal from "./Modal";
import Note from "../note/Note";
import Button from "./Button";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const AboutModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Note heading="About" hideOptions content={placeholder}>
        <div className="mt-2">
          <Button label="Close" onClick={() => setIsOpen(false)} />
        </div>
      </Note>
    </Modal>
  );
};
export default AboutModal;

const placeholder =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, enim explicabo modi maiores laboriosam animi itaque, veniam reiciendis officiis obcaecati, vero iusto excepturi ex dolorum atque cum a sunt dolore officia illo quidem. Veniam voluptas vero provident dolores alias odio.";
