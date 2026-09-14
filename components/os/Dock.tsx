"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps, getAppForPath } from "@/data/apps";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useShell } from "./shell-context";
import { AppIcon } from "./AppIcon";

function DockSlot({
  active,
  label,
  children,
}: {
  active?: boolean;
  label: string;
  children: ReactNode;
}) {
  return (
    <span className="group/dock relative flex items-center justify-center">
      <span className="dock-tooltip" role="tooltip">
        {label}
      </span>
      <span className="dock-item relative">
        {children}
        <span
          className={cn(
            "absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded bg-gray-900 dark:bg-white",
            active ? "opacity-100" : "opacity-0"
          )}
        />
      </span>
    </span>
  );
}

export function Dock() {
  const pathname = usePathname();
  const current = getAppForPath(pathname);
  const { minimized, setMinimized, setTrashOpen } = useShell();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-3 z-40 flex justify-center px-3">
      <nav
        aria-label="Dock"
        className="mac-dock pointer-events-auto flex items-end gap-3 rounded-[22px] px-3 pb-3 pt-2 md:gap-3.5 md:px-[14px]"
      >
        {apps.map((app) => {
          const active = current?.id === app.id && !minimized;
          return (
            <Link
              key={app.id}
              href={app.href}
              onClick={() => setMinimized(false)}
              aria-label={app.name}
            >
              <DockSlot active={active} label={app.name}>
                <AppIcon id={app.id} size="sm" />
              </DockSlot>
            </Link>
          );
        })}

        <div className="mb-1 hidden h-8 w-px self-center bg-black/15 dark:bg-white/20 sm:block" />

        {projects[0] && (
          <a
            href={projects[0].link}
            target="_blank"
            rel="noreferrer"
            aria-label="Safari"
            className="hidden sm:block"
          >
            <DockSlot label="Safari">
              <AppIcon id="safari" size="sm" />
            </DockSlot>
          </a>
        )}

        <button type="button" aria-label="Trash" onClick={() => setTrashOpen(true)}>
          <DockSlot label="Trash">
            <AppIcon id="trash" size="sm" />
          </DockSlot>
        </button>
      </nav>
    </div>
  );
}
