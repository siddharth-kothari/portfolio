"use client";

import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { IconBatteryFilled, IconSearch, IconWifi } from "@tabler/icons-react";
import DynamicClock from "./DateTime";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[40px] rounded-b-lg relative">
      <div className="sticky inset-x-0 top-0 z-50 flex justify-between items-center pt-0 dark:bg-white bg-black">
        {/* Left side - Placeholder for MacBook icons */}
        <div className="hidden md:flex items-center space-x-2 px-4 py-1">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          &nbsp;&nbsp;&nbsp;
          <Link
            href="/"
            className="text-lg text-bold text-white dark:text-black"
          >
            Siddharth Kothari
          </Link>
        </div>
        <Link href="/" className="block md:hidden">
          <Image
            src="/logo1.png"
            alt="logo"
            width={50}
            height={50}
            className="pl-4 bg-transparent"
          />
        </Link>

        <div className="w-20 md:w-40 h-[35px] bg-white dark:bg-black rounded-b-lg absolute top-0 left-1/2 transform -translate-x-1/2"></div>

        {/* Right side - Placeholder for icons like WiFi, battery */}
        <div className="flex items-center space-x-2 md:space-x-4 px-4 py-1">
          <span className="text-white dark:text-black flex items-center space-x-1">
            <p className="text-xs m-0">100%</p>
            <IconBatteryFilled className="w-5 h-5" />
          </span>

          <span className="text-white dark:text-black">
            <IconWifi className="w-5 h-5" />
          </span>
          <span className="hidden md:block text-white dark:text-black">
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
