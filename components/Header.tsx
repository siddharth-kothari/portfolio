"use client";

import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import {
  IconBatteryFilled,
  IconCaretUpDownFilled,
  IconMinimize,
  IconMinus,
  IconSearch,
  IconWifi,
  IconX,
} from "@tabler/icons-react";
import DynamicClock from "./DateTime";
import Image from "next/image";

const Header = () => {
  const goFullscreen = () => {
    const element = document.documentElement;

    // Check for requestFullscreen, with browser prefixes for older versions
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <header className="w-full h-[40px] rounded-b-lg relative">
      <div className="sticky inset-x-0 top-0 z-50 flex justify-between items-center pt-0 dark:bg-black bg-white">
        {/* Left side - Placeholder for MacBook icons */}
        <div className="hidden md:flex items-center space-x-2 px-4 py-1">
          <div className="group flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500 cursor-pointer flex items-center justify-center">
              <IconX className="text-black w-3 h-3 hidden group-hover:block" />
            </div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer flex items-center justify-center"><IconMinus className="text-black w-3 h-3 hidden group-hover:block"/></div>
            <div
              className="w-4 h-4 rounded-full bg-green-500 cursor-pointer flex items-center justify-center"
              onClick={goFullscreen}
            ><IconCaretUpDownFilled className="text-black w-3 h-3 hidden group-hover:block -rotate-45"/></div>
          </div>
          &nbsp;&nbsp;&nbsp;
          <Link
            href="/"
            className="text-lg text-bold dark:text-white text-black"
          >
            Siddharth Kothari
          </Link>
        </div>
        <Link href="/" className="block md:hidden">
          <Image
            src="/logo.webp"
            alt="logo"
            width={50}
            height={50}
            className="pl-4 bg-transparent"
          />
        </Link>

        {/* <div className="hidden md:block max-w-40 h-[35px] dark:bg-white bg-black rounded-b-lg absolute top-0 left-1/2 transform -translate-x-1/2"></div> */}

        {/* Right side - Placeholder for icons like WiFi, battery */}
        <div className="flex items-center space-x-2 md:space-x-4 px-4 py-1">
          <span className="dark:text-white text-black flex items-center space-x-1">
            <p className="text-xs m-0">100%</p>
            <IconBatteryFilled className="w-5 h-5" />
          </span>

          <span className="dark:text-white text-black">
            <IconWifi className="w-5 h-5" />
          </span>
          <span className="hidden md:block dark:text-white text-black">
            <IconSearch className="w-5 h-5" />
          </span>
          <DynamicClock />
          <DarkModeToggle />
        </div>
      </div>

      {/* Dark mode adjustment */}
    </header>
  );
};

export default Header;
