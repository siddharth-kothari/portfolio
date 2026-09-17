"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useShell } from "./shell-context";

type WindowProps = {
  title: string;
  compact?: boolean;
  children: ReactNode;
};

export function Window({ title, compact = false, children }: WindowProps) {
  const router = useRouter();
  const { setMinimized } = useShell();
  const reduce = useReducedMotion();
  const [zoomed, setZoomed] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const close = () => router.push("/");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (event.defaultPrevented || document.querySelector("[data-radix-select-content]")) {
          return;
        }
        close();
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "w") {
        event.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoomed || window.matchMedia("(max-width: 767px)").matches) return;
    drag.current = { x: event.clientX, y: event.clientY, ox: offset.x, oy: offset.y };
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    setOffset({
      x: drag.current.ox + (event.clientX - drag.current.x),
      y: drag.current.oy + (event.clientY - drag.current.y),
    });
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <div
      className={cn(
        "absolute z-30",
        zoomed
          ? "inset-8 top-10 max-md:inset-0 max-md:top-8"
          : "inset-x-0 bottom-20 top-8 flex items-center justify-center px-4"
      )}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <motion.section
        role="dialog"
        aria-label={title}
        initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.62, y: 72 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.48, y: 120 }}
        transition={
          reduce
            ? { duration: 0.12 }
            : { type: "spring", stiffness: 420, damping: 30, mass: 0.8 }
        }
        style={{ originX: 0.5, originY: 1 }}
        className={cn(
          zoomed
            ? "h-full w-full"
            : compact
              ? "w-full max-w-[40rem] max-h-[min(720px,calc(100dvh-8.5rem))]"
              : "h-[min(760px,calc(100dvh-8.5rem))] w-full max-w-[1080px]"
        )}
      >
        <div
          className={cn(
            "mac-window flex flex-col overflow-hidden",
            zoomed || !compact ? "h-full" : "max-h-[inherit]"
          )}
          style={{ transform: zoomed ? undefined : `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <div
            className="mac-titlebar relative flex h-11 shrink-0 items-center px-3"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Close"
                className="traffic traffic-close"
                onClick={close}
              />
              <button
                type="button"
                aria-label="Minimize"
                className="traffic traffic-min"
                onClick={() => setMinimized(true)}
              />
              <button
                type="button"
                aria-label="Zoom"
                className="traffic traffic-zoom"
                onClick={() => setZoomed((value) => !value)}
              />
            </div>
            <p className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-medium">
              {title}
            </p>
          </div>
          <div className="mac-window-body min-h-0 flex-1 overflow-y-auto">{children}</div>
        </div>
      </motion.section>
    </div>
  );
}
