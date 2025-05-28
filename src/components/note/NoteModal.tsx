import Button from "../elements/Button";
import Modal from "../elements/Modal";
import Input from "../form/Input";
import Note from "./Note";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NoteModal = ({ isOpen, setIsOpen }: Props) => {
  const colors = ["bg-red", "bg-blue", "bg-green", "bg-yellow", "bg-gray"];
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Note heading="Sign in" hideOptions>
        <form>
          <input type="hidden" name="color" value="new" />
          <div className="flex flex-col gap-3">
            <Input id="heading" label="Heading" />
            <Input id="content" type="textarea" label="Content" />
            <label className="text-xs block">
              <span className="mb-0.5 block">Color</span>
              <div className="flex gap-2 h-10 justify-between">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`${color} ${color === "bg-green" ? "border shadow" : ""} rounded-full h-full aspect-square`}
                  />
                ))}
              </div>
            </label>
            <Button type="submit" label="Save" onClick={() => setIsOpen(false)} />
          </div>
        </form>
      </Note>
    </Modal>
  );
};
export default NoteModal;
