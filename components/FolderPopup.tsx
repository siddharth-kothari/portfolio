"use client";

import { motion } from "framer-motion";
import { Experience } from "./Experience";
import { IconCaretUpDownFilled, IconMinus, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";

interface FolderPopupProps {
  folder: string;
  closeFolder: () => void;
}

const FolderPopup = ({ folder, closeFolder }: FolderPopupProps) => {
  // Define folder styles based on dark mode
  const [folderStyles, setFolderStyles] = useState<React.CSSProperties>({
    maxWidth: "1280px",
    maxHeight: "80%",
  });

  const goFullscreen = () => {
    setFolderStyles({
      maxWidth: "100%",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
      zIndex: "9999",
      borderRadius: "0"
    });
  };

  const resetSize = () => {
    setFolderStyles({
      maxWidth: "1280px",
      maxHeight: "80%",
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        resetSize();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getFolderContent = () => {
    switch (folder) {
      case "projects":
        return (
          <Projects />
        );
      case "about":
        return (
          <About />
        );
      case "skills":
        return (
          <div>
            <h2 className="text-xl font-bold">Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2 className="text-xl font-bold">Contact</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="p-2 mt-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 mt-2 w-full"
              />
              <textarea
                placeholder="Message"
                className="p-2 mt-2 w-full"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        );
      case "experience":
        return (
          <Experience />
        )
      default:
        return null;
    }
  };



  return (
    <motion.div
      className="absolute z-40 mx-4 bg-white dark:bg-[#333] text-black dark:text-white transform -translate-y-1/2 rounded-xl shadow-lg max-w-7xl max-h-[80%] overflow-x-scroll"
      style={folderStyles} // Apply the dynamic styles here
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 sticky top-0 bg-white dark:bg-[#333] text-black dark:text-white pt-2 pl-3 p-6 z-40">
      <div className="group flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500 cursor-pointer flex items-center justify-center" onClick={closeFolder}>
              <IconX className="text-black w-3 h-3 hidden group-hover:block" />
            </div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer flex items-center justify-center" onClick={closeFolder}><IconMinus className="text-black w-3 h-3 hidden group-hover:block"/></div>
            <div
              className="w-4 h-4 rounded-full bg-green-500 cursor-pointer flex items-center justify-center"
              onClick={goFullscreen}
            ><IconCaretUpDownFilled className="text-black w-3 h-3 hidden group-hover:block -rotate-45"/></div>
          </div>
        <h2 className="text-xl font-bold">
          {folder.charAt(0).toUpperCase() + folder.slice(1)}
        </h2>
        
      </div>
      <div className="mt-4 pt-2 pl-3 p-6">{getFolderContent()}</div>
    </motion.div>
  );
};

export default FolderPopup;
