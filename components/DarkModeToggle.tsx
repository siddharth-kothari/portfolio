"use client";

import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Check localStorage for the user's theme preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button data-ignore-outside-click onClick={toggleDarkMode} className="py-2" aria-label="dark mode toggle button" id="dark-mode">
      {isDarkMode ? <IconSunFilled /> : <IconMoonFilled className='text-black'/>}
    </button>
  );
};

export default DarkModeToggle;
