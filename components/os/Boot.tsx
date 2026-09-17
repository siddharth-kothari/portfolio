"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { site } from "@/data/site";

function subscribe() {
  return () => {};
}

function getBooted() {
  return sessionStorage.getItem("mac-booted") === "1";
}

export function Boot() {
  const alreadyBooted = useSyncExternalStore(subscribe, getBooted, () => false);
  const [progress, setProgress] = useState(8);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (alreadyBooted) return;

    const tick = window.setInterval(() => {
      setProgress((value) => Math.min(value + 9 + Math.random() * 14, 100));
    }, 120);

    return () => window.clearInterval(tick);
  }, [alreadyBooted]);

  useEffect(() => {
    if (progress < 100) return;
    const done = window.setTimeout(() => {
      sessionStorage.setItem("mac-booted", "1");
      setFinished(true);
    }, 280);
    return () => window.clearTimeout(done);
  }, [progress]);

  if (alreadyBooted || finished) return null;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-10 text-7xl font-serif tracking-tight">
        {site.firstName.charAt(0)}
      </div>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-white/15">
        <div
          className="h-full rounded-full bg-white transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
