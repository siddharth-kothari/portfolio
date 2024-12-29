import { useEffect, useState } from "react";
import { IconBulbFilled, IconX } from "@tabler/icons-react";

type NotificationBannerProps = {
  message: string;
  type: string; // Define the notification type
  onClose: () => void;
  onClick?: () => void;
  timer?: number;
};

export default function NotificationBanner({
  message,
  type,
  onClose,
  onClick,
  timer = 5000
}: NotificationBannerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<string>("now");

  useEffect(() => {
    const startTime = Date.now();

    // Update elapsed time every second
    const interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      if (seconds < 60) {
        setElapsedTime("now");
      } else if (seconds < 3600) {
        setElapsedTime(`${Math.floor(seconds / 60)}m ago`);
      } else {
        setElapsedTime(`${Math.floor(seconds / 3600)}h ago`);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    // Auto-close logic: close after 4 seconds if not hovered
    const timer1 = setTimeout(() => {
      if (!isHovered) onClose();
    }, timer);

    return () => clearTimeout(timer1); // Cleanup timeout on unmount
  }, [isHovered, onClose]);

  return (
    <div
      className={`fixed top-14 right-3 w-80 p-4 rounded-2xl shadow-lg flex items-center gap-4 animate-slide-in backdrop-blur-[2px] dark:bg-[#333] bg-white ${type === 'tips' ? "cursor-pointer" : ""}`}
      style={{
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for glass effect
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Frosted shadow
        zIndex:"100"
      }}
      onMouseEnter={() => setIsHovered(true)} // Pause auto-close on hover
      onMouseLeave={() => setIsHovered(false)} // Resume auto-close when hover ends
      onClick={(e) => {
        // Ensure the click is not triggered when clicking on the close button
        if ((e.target as HTMLElement).closest('button')) return;  // Skip if the click is on the close button
        onClick?.(); // Trigger the popup opening logic
        onClose();
      }}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div
          className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${
            type === "tips" ? "bg-yellow-500" : type === "success" ? "bg-green-400/60" : "bg-red-400/60"
          }`}
        >
          {type === "tips" ? <IconBulbFilled /> : type === "success" ? "✓" : "✗"}
        </div>
      </div>

      {/* Message */}
      <div className="flex-1 text-white">
        <p className="text-black dark:text-white font-bold text-sm capitalize">
          {type}
        </p>
        <p className="text-black dark:text-white text-xs">{message}</p>
      </div>

      {/* Elapsed Time */}
      <div className="absolute top-2 right-4 text-gray-500 dark:text-gray-400 text-xs">
        {elapsedTime}
      </div>

      {/* Close Button (Visible on Hover) */}
      <button
        data-ignore-outside-click
        className={`absolute overflow-visible top-[-8px] left-[-8px] transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        onClick={(event) => {
          event.stopPropagation(); // Prevent the event from bubbling up to the parent
          onClose(); // Close the banner
        }}
        style={{
          zIndex: "999"
        }}
        aria-label="Close notification"
      >
        <IconX className="bg-white text-gray-800 dark:bg-[#333] dark:text-white border border-gray-500 rounded-full p-1 w-5 h-5" />
      </button>
    </div>
  );
}
