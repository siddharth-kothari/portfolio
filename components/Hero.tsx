"use client";

import { useState } from "react";
import FolderPopup from "@/components/FolderPopup";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconUser,
  IconHome,
  IconMessageCircleFilled,
  IconNewSection,
  IconTerminal2,
  IconCode,
  IconTools,
  IconSettings,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Introduction from "./Introduction";


const Hero = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  const openSpecificFolder = (folderName: string) => setOpenFolder(folderName);
  const closeFolder = () => setOpenFolder(null);

  const router = useRouter();

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white" />
      ),
      color: "bg-gradient-to-r from-[#4e9af1] to-[#3b74cb]",
      onclick: closeFolder,
    },

    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-white" />
      ),   
      color: "bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d]",
      onclick: () => openSpecificFolder('about'),
    },

    {
      title: "Services",
      icon: (
        <IconSettings className="h-full w-full text-white" />
      ),   
      color: "bg-gradient-to-r from-[#56ccf2] to-[#6e7ff3]",
      onclick: () => openSpecificFolder('services'),
    },

    {
      title: "Skills",
      icon: (
        <IconTools className="h-full w-full text-white" />
      ),
      color: "bg-gradient-to-r from-[#ff6a00] to-[#ee0979]",
      onclick: () => openSpecificFolder('skills'),
    },

    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-white" />
      ),
      color:"bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]",
      onclick: () => openSpecificFolder('projects'),
    },

    {
      title: "Contact",
      icon: (
        <IconMessageCircleFilled className="h-full w-full text-white" />
      ),
      color: 'bg-gradient-to-r from-[#34d399] to-[#10b981]',
      onclick: () => openSpecificFolder('contact'),
    },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      <div className="absolute top-0 w-full">
        <Header />
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/macbook-background-1.png)", // Add your desktop background image
        }}
      />

      <div className="absolute top-1/2 transform -translate-y-1/2 pt-2 pl-3 p-6 max-w-7xl">
        <Introduction />
      </div>

      {openFolder && (
        <FolderPopup folder={openFolder} closeFolder={closeFolder} />
      )}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-4 px-8">
        <div className="flex items-center justify-center w-full">
          <FloatingDock
            items={links}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
