import { FaPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-2 mt-4 mx-4">
      <div className="bg-white w-full shadow border rounded">
        <ul className="flex items-center justify-between h-full px-4 py-2">
          <li>
            <h1 className="font-semibold text-xl">NoteDeck</h1>
          </li>
          <div className="flex items-center gap-4">
            <li className="font-medium text-sm cursor-pointer">About</li>
            <li className="font-medium text-sm cursor-pointer">Sign in</li>
          </div>
        </ul>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <input
            placeholder="Search..."
            className="border bg-white rounded px-4 font-medium text-sm text-black/65 outline-none shadow py-2"
          />
          <div className="h-10 rounded aspect-square shadow border bg-white flex justify-center items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
            <FaPlus />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
