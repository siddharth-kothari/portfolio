"use client";

import { motion } from "framer-motion";
import { Experience } from "./Experience";

interface FolderPopupProps {
  folder: string;
  closeFolder: () => void;
}

const FolderPopup = ({ folder, closeFolder }: FolderPopupProps) => {
  // Define folder styles based on dark mode
  // const folderStyles: React.CSSProperties = {
  //   backgroundColor: "white",
  //   color: "black",
  // };

  // // Check if dark mode is enabled
  // if (
  //   typeof window !== "undefined" &&
  //   document.documentElement.classList.contains("dark")
  // ) {
  //   folderStyles.backgroundColor = "#333";
  //   folderStyles.color = "white";
  // }

  const getFolderContent = () => {
    switch (folder) {
      case "projects":
        return (
          <div>
            <h2 className="text-xl font-bold">My Projects</h2>
            <ul>
              <li>
                <a href="#project1" className="text-blue-600 hover:underline">
                  Project 1
                </a>
              </li>
              <li>
                <a href="#project2" className="text-blue-600 hover:underline">
                  Project 2
                </a>
              </li>
            </ul>
          </div>
        );
      case "about":
        return (
          <div>
            <h2 className="text-xl font-bold">About Me</h2>
            <p>
              I am a full-stack web developer specializing in modern JavaScript
              frameworks like React, Next.js, and more.
            </p>
          </div>
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
      // style={folderStyles} // Apply the dynamic styles here
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 sticky top-0 bg-white dark:bg-[#333] text-black dark:text-white pt-2 pl-3 p-6 z-40">
        <div className="flex items-center space-x-3">
          <div onClick={closeFolder} className="w-3 h-3 rounded-full cursor-pointer bg-red-500" />
          <div onClick={closeFolder} className="w-3 h-3 rounded-full cursor-pointer bg-yellow-500" />
          <div className="w-3 h-3 rounded-full cursor-pointer bg-green-500" />
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
