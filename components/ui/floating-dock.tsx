"use client"

import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; onclick: () => void; color?: string; isFolderOpen?: any; }[]; // Updated to include onClick prop for each item
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; onclick: () => void; color?: string; isFolderOpen?: any; }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | {
    title: string;
    icon: React.ReactNode;
    color?: string;
    isFolderOpen?: any;
  }>(null); 
  
  const dockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setOpen(false);
        setSelectedItem(null);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <div ref={dockRef} className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-20 inset-x-0 flex items-center justify-center dark:text-white"
          >
            {items.map((item, idx) => {
              // Dynamically adjust radius for optimal spacing
              const radius = 90 + items.length * 5; // Dynamic radius
              const angle = Math.PI + (Math.PI / (items.length - 1)) * idx; // Semicircle
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x,
                    y,
                  }}
                  exit={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    transition: {
                      delay: (items.length - idx - 1) * 0.05, // Reverse animation
                    },
                  }}
                  transition={{
                    delay: idx * 0.05, // Sequential animation
                  }}
                  className="absolute"
                >
                  <button
                    onClick={() => {
                      setSelectedItem(item); // Set the selected item
                      item.onclick();
                      setOpen(false); // Close the dock
                    }}
                    className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      item.color || "bg-gray-200 dark:bg-neutral-700"
                    }`}
                  >
                    <div className="h-6 w-6">{item.icon}</div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <button
        data-ignore-outside-click
        onClick={() => setOpen(!open)}
        aria-label="dock"
        className={`h-12 w-12 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center relative ${
          selectedItem?.isFolderOpen ? selectedItem?.color : ""
        }`}
      >
        {/* Display the selected item's icon or fallback to the default icon */}
        <div className="h-6 w-6 dark:text-white text-black">
          {selectedItem && selectedItem.isFolderOpen ? selectedItem.icon : <IconLayoutNavbarCollapse />}
        </div>
      </button>
    </div>
  );
};


const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; onclick: () => void; color?: string; isFolderOpen?: () => void; }[]; // Updated to include onClick prop for each item
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  onclick,
  color
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  onclick: () => void; // Added onClick function
  color?: string;
  isFolderOpen?: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 30, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onClick={onclick} // Trigger onClick when an item is clicked
    >
      <motion.div
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`aspect-square  ${color} rounded-[10px] flex items-center justify-center relative`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: -10, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-base"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={`flex items-center justify-center`}
        >
          {icon}
        </motion.div>
      </motion.div>
    </div>
  );
}
