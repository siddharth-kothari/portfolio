"use client";

import { useEffect, useState } from "react";

const DynamicClock = () => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = `${now.toLocaleString("en-US", {
        weekday: "short",
      })} ${now.toLocaleString("en-US", {
        month: "short",
      })} ${now.getDate()} ${now
        .getHours()
        .toString()
        .padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setDateTime(formattedDateTime);
    };

    updateDateTime(); // Set initial date and time
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div className="text-white dark:text-black text-sm hidden md:block">{dateTime}</div>;
};

export default DynamicClock;
