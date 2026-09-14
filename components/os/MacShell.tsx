"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { getAppForPath } from "@/data/apps";
import { getProject } from "@/data/projects";
import { getService } from "@/data/services";
import { Boot } from "./Boot";
import { Desktop } from "./Desktop";
import { Dock } from "./Dock";
import { MenuBar } from "./MenuBar";
import { Notification } from "./Notification";
import { ShellProvider, useShell } from "./shell-context";
import { Spotlight } from "./Spotlight";
import { Window } from "./Window";

function windowTitle(pathname: string) {
  const app = getAppForPath(pathname);
  if (!app) return null;
  if (pathname.startsWith("/work/")) {
    const slug = pathname.split("/")[2];
    return getProject(slug)?.title ?? "Work";
  }
  if (pathname.startsWith("/services/")) {
    const slug = pathname.split("/")[2];
    return getService(slug)?.title ?? "Services";
  }
  return app.title;
}

function ShellFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const title = windowTitle(pathname);
  const { minimized, setMinimized } = useShell();

  useEffect(() => {
    setMinimized(false);
  }, [pathname, setMinimized]);

  return (
    <div className="relative h-dvh overflow-hidden text-neutral-900 dark:text-neutral-100">
      <Desktop />
      <MenuBar />
      <AnimatePresence>
        {pathname !== "/" && !minimized && (
          <Window key={getAppForPath(pathname)?.id ?? "finder"} title={title ?? "Finder"}>
            {children}
          </Window>
        )}
      </AnimatePresence>
      <Dock />
      <Spotlight />
      <Notification />
      <Boot />
    </div>
  );
}

export function MacShell({ children }: { children: ReactNode }) {
  return (
    <ShellProvider>
      <ShellFrame>{children}</ShellFrame>
    </ShellProvider>
  );
}
