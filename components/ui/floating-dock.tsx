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

  // Wiggle animation effect on initial render


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
              const radius = 90 + items.length * 5; 
              const angle = Math.PI + (Math.PI / (items.length - 1)) * idx;
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
                      delay: (items.length - idx - 1) * 0.05, 
                    },
                  }}
                  transition={{
                    delay: idx * 0.05, 
                  }}
                  className="absolute"
                >
                  <button
                    onClick={() => {
                      setSelectedItem(item); 
                      item.onclick();
                      setOpen(false); 
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

      {/* Main Button with Wiggle on Initial Load */}
      <motion.button
        data-ignore-outside-click
        onClick={() => setOpen(!open)}
        aria-label="dock"
        className={`h-12 w-12 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center relative ${
          selectedItem?.isFolderOpen ? selectedItem?.color : ""
        }`}
        // animate={{
        //   rotate: wiggle ? [0, -15, 15, 0] : 0,
        // }}
        // transition={{
        //   duration: 0.5,
        //   ease: "easeInOut",
        // }}
      >
        <div className="h-6 w-6 dark:text-white text-black">
          {selectedItem && selectedItem.isFolderOpen ? selectedItem.icon : <IconLayoutNavbarCollapse />}
        </div>
      </motion.button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; onclick: () => void; color?: string; isFolderOpen?: () => void; }[]; 
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
  onclick: () => void; 
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
  const [bounce, setBounce] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWiggle(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Bounce animation trigger
  const handleClick = () => {
    setBounce(true);
    onclick();
    setTimeout(() => setBounce(false), 500); // Reset bounce animation after 0.5s
  };

  return (
    <div
      ref={ref}
      onClick={handleClick} // Trigger onClick when an item is clicked
    >
      <motion.div
        style={{ width, height }}
        animate={{
          y: bounce ? [0, -30, -15, 0] : 0, // Bounce effect similar to CSS keyframes
          rotate: wiggle ? [0, -15, 15, 0] : 0,
        }}
        transition={{ duration: 0.7, ease: "linear" }}
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
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-600 text-xs text-black dark:text-white absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="w-full h-full flex items-center justify-center"
        >
          <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={`flex items-center justify-center`}
        >
          {icon}
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
