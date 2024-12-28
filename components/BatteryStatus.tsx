import { IconBoltFilled } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

const BatteryIndicator = () => {
  const [batteryLevel, setBatteryLevel] = useState(100); // Default level
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    const updateBatteryStatus = (battery: BatteryManager) => {
      setBatteryLevel(Math.round(battery.level * 100));
      setIsCharging(battery.charging);

      // Update on events
      battery.addEventListener("levelchange", () =>
        setBatteryLevel(Math.round(battery.level * 100))
      );
      battery.addEventListener("chargingchange", () =>
        setIsCharging(battery.charging)
      );
    };

    if (navigator.getBattery) {
      navigator.getBattery().then(updateBatteryStatus);
    } else {
      console.warn("Battery API is not supported in this browser.");
    }
  }, []);

  return (
    <div className="flex items-center space-x-2 text-white relative">
      {/* Battery Percentage */}
      <span className="text-xs dark:text-white text-black">{batteryLevel}%</span>

      {/* Battery Icon */}
      <div className="relative w-6 h-3 border border-black dark:border-gray-300 rounded-sm flex items-center justify-center z-20">
        {/* Charging Icon */}
        {isCharging && (
          <span
            className="absolute text-[10px] text-white"
            style={{ zIndex: 1 }}
          >
            <IconBoltFilled className="w-4 h-4 text-white dark:text-black"/>
          </span>
        )}

        {/* Battery Fill */}
        <div
          style={{
            width: `${Math.max(batteryLevel, 5)}%`, // Minimum visible fill
            zIndex: isCharging ? 0 : 1, // Push fill below the icon when charging
          }}
          className={`${
    isCharging
      ? 'bg-black dark:bg-white'
      : batteryLevel > 10
      ? 'bg-black dark:bg-white'
      : 'bg-red-500'
  } absolute left-0 h-full transition-all duration-300`}
        ></div>

        {/* Battery Cap */}
      </div>
        <div className="absolute z-10 top-[5.5px] right-[-2px] w-[2px] h-[5px] bg-black dark:bg-gray-300 rounded-e-md"></div>
    </div>
  );
};

export default BatteryIndicator;
