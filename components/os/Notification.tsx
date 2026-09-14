"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useShell } from "./shell-context";

function subscribe() {
  return () => {};
}

function getHintSeen() {
  return localStorage.getItem("mac-hint-seen") === "1";
}

export function Notification() {
  const { trashOpen, setTrashOpen } = useShell();
  const seen = useSyncExternalStore(subscribe, getHintSeen, () => true);
  const [dismissed, setDismissed] = useState(false);
  const showHint = !seen && !dismissed;

  useEffect(() => {
    if (!showHint) return;
    const id = window.setTimeout(() => {
      setDismissed(true);
      localStorage.setItem("mac-hint-seen", "1");
    }, 7000);
    return () => window.clearTimeout(id);
  }, [showHint]);

  return (
    <>
      {showHint && (
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            localStorage.setItem("mac-hint-seen", "1");
          }}
          className="mac-note fixed right-4 top-12 z-50 w-80 p-3 text-left"
        >
          <p className="text-xs font-semibold">Finder</p>
          <p className="mt-1 text-sm opacity-80">
            Click a folder or the Dock. Press Cmd+K for Spotlight.
          </p>
        </button>
      )}

      {trashOpen && (
        <button
          type="button"
          onClick={() => setTrashOpen(false)}
          className="mac-note fixed right-4 top-12 z-50 w-80 p-3 text-left"
        >
          <p className="text-xs font-semibold">Trash</p>
          <p className="mt-1 text-sm opacity-80">Empty. Your deadlines were last seen here.</p>
        </button>
      )}
    </>
  );
}
