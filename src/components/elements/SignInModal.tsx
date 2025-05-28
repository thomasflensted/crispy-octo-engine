import Modal from "./Modal";
import Input from "../form/Input";
import Button from "./Button";
import { FaApple, FaGoogle } from "react-icons/fa";
import Note from "../Note";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const SignInModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Note heading="Sign in" hideOptions>
        <form>
          <div className="flex flex-col gap-3">
            <Input id="email" placeholder="johndoe@email.com" type="email" label="Email" />
            <Input id="password" placeholder="yoursuperstrongpassword" type="password" label="Password" />
            <div className="flex flex-col gap-2">
              <Button type="submit" label="Sign in" onClick={() => setIsOpen(false)} />
              <div className="flex gap-2 items-center my-1">
                <div className="border-b border-black/20 w-full" />
                <p className="text-sm">or</p>
                <div className="border-b border-black/20 w-full" />
              </div>
              <Button label="Sign in with Google" onClick={() => setIsOpen(false)} icon={<FaGoogle />} />
              <Button label="Sign in with Apple" onClick={() => setIsOpen(false)} icon={<FaApple />} />
            </div>
          </div>
        </form>
      </Note>
    </Modal>
  );
};
export default SignInModal;
