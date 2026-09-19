"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconMoonFilled, IconSearch, IconSunFilled, IconWifi } from "@tabler/icons-react";
import { getAppForPath } from "@/data/apps";
import { site } from "@/data/site";
import { useShell } from "./shell-context";
import { BatteryStatus } from "./BatteryStatus";

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getDark() {
  return document.documentElement.classList.contains("dark");
}

export function MenuBar() {
  const pathname = usePathname();
  const router = useRouter();
  const app = getAppForPath(pathname);
  const { setSpotlightOpen } = useShell();
  const [now, setNow] = useState("");
  const dark = useSyncExternalStore(subscribeTheme, getDark, () => true);

  useEffect(() => {
    const format = () => {
      const date = new Date();
      setNow(
        `${date.toLocaleString("en-US", { weekday: "short" })} ${date.toLocaleString("en-US", { month: "short" })} ${date.getDate()}  ${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
      );
    };
    const id = window.setInterval(format, 15_000);
    const immediate = window.setTimeout(format, 0);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(immediate);
    };
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="mac-menubar relative z-50 flex h-8 items-center justify-between px-3 text-[13px] font-medium">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="grid h-5 w-5 place-items-center rounded-sm font-serif text-[17px] leading-none hover:bg-black/10 dark:hover:bg-white/10"
          aria-label={`${site.name} — desktop`}
        >
          {site.firstName.charAt(0)}
        </button>
        <span className="font-semibold">{app?.name ?? "Finder"}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="grid h-5 w-5 place-items-center rounded-sm hover:bg-black/10 dark:hover:bg-white/10"
          onClick={() => setSpotlightOpen(true)}
          aria-label="Spotlight"
        >
          <IconSearch className="h-3.5 w-3.5" />
        </button>
        <IconWifi className="h-3.5 w-3.5" />
        <BatteryStatus />
        <time className="hidden tabular-nums md:inline">{now}</time>
        <button
          type="button"
          onClick={toggleTheme}
          className="grid h-5 w-5 place-items-center"
          aria-label="Toggle appearance"
        >
          {dark ? <IconSunFilled className="h-3.5 w-3.5" /> : <IconMoonFilled className="h-3.5 w-3.5" />}
        </button>
      </div>
    </header>
  );
}
