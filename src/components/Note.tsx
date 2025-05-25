import { IoMenu } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const Note = () => {
  return (
    <div className="h-72 w-60 border mt-10 ml-80 bg-white shadow rounded overflow-hidden">
      <div className="border-b flex py-2 justify-between font-semibold bg-emerald-100/50 items-center px-4">
        <IoMenu className="text-base" />
        <h3>Heading</h3>
        <FaEdit className="text-base" />
      </div>
    </div>
  );
};
export default Note;
