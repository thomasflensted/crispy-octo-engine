import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import AboutModal from "./AboutModal";
import SignInModal from "./SignInModal";
import NoteModal from "../note/NoteModal";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [newNoteIsOpen, setNewNoteIsOpen] = useState(false);
  const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);

  return (
    <>
      <AboutModal isOpen={aboutModalIsOpen} setIsOpen={setAboutModalIsOpen} />
      <SignInModal isOpen={signInIsOpen} setIsOpen={setSignInIsOpen} />
      <NoteModal isOpen={newNoteIsOpen} setIsOpen={setNewNoteIsOpen} />
      <nav className="flex flex-col gap-2 mt-4 mx-4">
        <div className="bg-white w-full shadow border rounded">
          <ul className="flex items-center justify-between h-full px-4 py-2">
            <li>
              <h1 className="font-semibold text-xl">NoteDeck</h1>
            </li>
            <div className="flex items-center gap-4">
              <li onClick={() => setAboutModalIsOpen(true)} className="font-medium text-sm cursor-pointer">
                About
              </li>
              <li onClick={() => setSignInIsOpen(true)} className="font-medium text-sm cursor-pointer">
                Sign in
              </li>
            </div>
          </ul>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <motion.input
              whileFocus={{ width: 350 }}
              placeholder="Search..."
              className="border bg-white rounded px-4 font-medium text-sm text-black/65 outline-none shadow py-2 text-ellipsis"
            />
            <button
              onClick={() => setNewNoteIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="h-10 rounded aspect-square shadow border bg-white flex justify-center items-center cursor-pointer">
              <motion.div
                initial={false}
                animate={{
                  rotate: isHovered ? 90 : 0,
                  scale: isHovered ? 1.2 : 1,
                }}>
                <FaPlus />
              </motion.div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
