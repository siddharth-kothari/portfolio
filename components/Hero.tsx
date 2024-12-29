"use client";

import { useEffect, useState } from "react";
import FolderPopup from "@/components/FolderPopup";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconUser,
  IconHome,
  IconMessageCircleFilled,
  IconCode,
  IconTools,
  IconSettings,
  IconBriefcaseFilled,
} from "@tabler/icons-react";
import Introduction from "./Introduction";
import { Meteors } from "./ui/meteor-shower";
import NotificationBanner from "./ui/notification-banner";
import introJs from "intro.js";
import "intro.js/introjs.css";
import "@/app/globals.css";

const Hero = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [isBannerVisible, setBannerVisible] = useState(false); // State to manage visibility of the banner

  const openSpecificFolder = (folderName: string) => setOpenFolder(folderName);

  useEffect(() => {
    const hasSeenTips = localStorage.getItem("hasSeenTips");

    if (!hasSeenTips) {
      // Show the modal if the user hasn't seen the tips
      setBannerVisible(true);
    }
  }, []);

  const handleBannerClose = () => {
    setBannerVisible(false); // Hide the banner when onClose is triggered
    localStorage.setItem("hasSeenTips", "true");
  };

  const closeFolder = () => {
    setOpenFolder(null);
    isFolderOpen('home')
  };

  const isFolderOpen = (folderName: string) => {
    return openFolder === folderName;
  };

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      color: "bg-gradient-to-r from-[#4e9af1] to-[#3b74cb]",
      onclick: closeFolder, // Close all folders
      isFolderOpen: openFolder === "home", // Check if "Home" folder is open
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-white" />,
      color: "bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]",
      onclick: () => openSpecificFolder("about"), // Open "About" folder
      isFolderOpen: () => isFolderOpen("about"), // Check if "About" folder is open
    },
    // {
    //   title: "Services",
    //   icon: (
    //     <IconSettings className="h-full w-full text-white" />
    //   ),
    //   color: "bg-gradient-to-r from-[#56ccf2] to-[#6e7ff3]",
    //   onclick: () => openSpecificFolder("services"),
    // },
    {
      title: "Experience",
      icon: <IconBriefcaseFilled className="h-full w-full text-white" />,
      color: "bg-gradient-to-r from-[#ff9966] to-[#ff5e62]",
      onclick: () => openSpecificFolder("experience"), // Open "Experience" folder
      isFolderOpen: () => isFolderOpen("experience"), // Check if "Experience" folder is open
    },
    {
      title: "Skills",
      icon: <IconTools className="h-full w-full text-white" />,
      color: "bg-gradient-to-r from-[#ff6a00] to-[#ee0979]",
      onclick: () => openSpecificFolder("skills"), // Open "Skills" folder
      isFolderOpen: () => isFolderOpen("skills"), // Check if "Skills" folder is open
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-white" />,
      color: "bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]",
      onclick: () => openSpecificFolder("projects"), // Open "Projects" folder
      isFolderOpen: () => isFolderOpen("projects"), // Check if "Projects" folder is open
    },
    {
      title: "Contact",
      icon: <IconMessageCircleFilled className="h-full w-full text-white" />,
      color: "bg-gradient-to-r from-[#34d399] to-[#10b981]",
      onclick: () => openSpecificFolder("contact"), // Open "Contact" folder
      isFolderOpen: () => isFolderOpen("contact"), // Check if "Contact" folder is open
    },
  ];

  const startTour = () => {
    introJs().setOptions({
      steps: [
        {
          intro: 'Welcome to my developer portfolio! I&apos;m Siddharth, and this is where I showcase my work and skills. Let me guide you through the key features of the site.',
          title: 'Welcome!',
        },
        {
          element: '#dark-mode',
          intro: 'For a more comfortable experience, you can switch between dark and light modes using the toggle in the header.',
          title: 'Dark Mode',
        },
        {
          element: '#dock1',
          intro: 'At the bottom of the page, you&apos;ll find the floating dock. Click on the icons to quickly navigate to different sections of the portfolio.',
          title: 'Dock',
        },
        {
          intro: 'That&apos;s the end of the tour! Feel free to explore the site further, view my projects, and contact me. Don’t hesitate to reach out if you have any questions.',
          title: 'Thanks for Touring!',
        }
      ],
      nextLabel: 'Next',
      prevLabel: 'Back',
    }).start();
    
  }

  return (
    <>
    {isBannerVisible && (
        <NotificationBanner
          message="Click to discover what's new!"
          type="tips"
          onClose={handleBannerClose} // Pass the close handler
          onClick={() => startTour()}
          timer={10000} // Optional: close automatically after 10 seconds
        />
      )}
    <section className="relative h-dvh flex flex-col items-center justify-center text-white bg-gray-900 overflow-hidden">

      <div className="absolute top-0 w-full">
        <Header />
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/macbook-background-1.webp)", // Add your desktop background image
        }}
      />

      <div className="absolute top-1/2 transform -translate-y-1/2 pt-2 pl-3 p-6 max-w-7xl">
        <Introduction openSpecificFolder={openSpecificFolder}/>
      </div>

      <AnimatePresence>
        {openFolder && (
          <FolderPopup folder={openFolder} closeFolder={closeFolder} />
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-4 px-8 z-50">
        <div className="flex items-center justify-center w-full dock-demo" id="dock1">
          <FloatingDock items={links} />
        </div>
      </div>
      <Meteors number={20} />
    </section>
    </>
  );
};

export default Hero;
