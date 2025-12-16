"use client";

import { motion } from "framer-motion";
import { Experience } from "./Experience";
import { IconCaretUpDownFilled, IconMinus, IconX } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Tips from "./Tips";
import type { ReactNode } from "react";

interface FolderPopupProps {
  folder: string;
  closeFolder: () => void;
  showNotification?: Function
}

const FolderPopup = ({ folder, closeFolder, showNotification }: FolderPopupProps) => {
  // Define folder styles based on dark mode
  const [folderStyles, setFolderStyles] = useState<React.CSSProperties>({
    maxWidth: "1280px",
    maxHeight: "80%",
  });

  const popupRef = useRef<HTMLDivElement>(null); // Ref to track the popup

  const goFullscreen = () => {
    setFolderStyles({
      maxWidth: "100%",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
      zIndex: "9999",
      borderRadius: "0",
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

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Ignore clicks on elements with the "data-ignore-outside-click" attribute
      if (target.closest("[data-ignore-outside-click]")) {
        return;
      }

      if (popupRef.current && !popupRef.current.contains(target)) {
        closeFolder();
      }
    };

    // Add event listener for clicks outside and keydown
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const getFolderContent = () => {
    const contentMap: Record<string, ReactNode> = {
      projects: <Projects />,
      about: <About />,
      skills: <Skills />,
      contact: <Contact />,
      experience: <Experience />,
      services: <Experience />,
      tips: <Tips />
    };
    return contentMap[folder] || null;
  };

  return (
    <motion.div
      className="absolute z-40 mx-4 bg-white dark:bg-[#333] text-black dark:text-white transform -translate-y-1/2 rounded-xl shadow-lg max-w-7xl max-h-[80%] overflow-x-scroll"
      style={folderStyles} // Apply the dynamic styles here
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }} // Smooth closing animation
      transition={{ duration: 0.3 }} // Duration for both opening and closing
      ref={popupRef} // Attach the ref to the popup
    >
      <div className="flex items-center gap-2 sticky top-0 bg-white dark:bg-[#333] text-black dark:text-white pt-2 py-3 p-6 z-40">
        
        <div className="group flex items-center space-x-2">
          <div
            className="w-4 h-4 rounded-full bg-red-500 cursor-pointer flex items-center justify-center"
            onClick={closeFolder}
          >
            <IconX className="text-black w-3 h-3 hidden group-hover:block" />
          </div>
          <div
            className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer flex items-center justify-center"
            onClick={resetSize}
          >
            <IconMinus className="text-black w-3 h-3 hidden group-hover:block" />
          </div>
          <div
            className="w-4 h-4 rounded-full bg-green-500 cursor-pointer flex items-center justify-center"
            onClick={goFullscreen}
          >
            <IconCaretUpDownFilled className="text-black w-3 h-3 hidden group-hover:block -rotate-45" />
          </div>
        </div>
        <h2 className="text-xl font-bold">
          {folder.charAt(0).toUpperCase() + folder.slice(1)}
        </h2>
      </div>
      <div className="mt-4 pt-2 py-3 p-6">{getFolderContent()}</div>
    </motion.div>
  );
};

export default FolderPopup;
