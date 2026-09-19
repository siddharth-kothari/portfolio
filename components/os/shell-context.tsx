"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ShellContextValue = {
  minimized: boolean;
  setMinimized: (value: boolean) => void;
  spotlightOpen: boolean;
  setSpotlightOpen: (value: boolean) => void;
  trashOpen: boolean;
  setTrashOpen: (value: boolean) => void;
};

const ShellContext = createContext<ShellContextValue | null>(null);

export function ShellProvider({ children }: { children: ReactNode }) {
  const [minimized, setMinimized] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [trashOpen, setTrashOpen] = useState(false);

  const value = useMemo(
    () => ({
      minimized,
      setMinimized,
      spotlightOpen,
      setSpotlightOpen,
      trashOpen,
      setTrashOpen,
    }),
    [minimized, spotlightOpen, trashOpen]
  );

  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>;
}

export function useShell() {
  const ctx = useContext(ShellContext);
  if (!ctx) {
    throw new Error("useShell must be used inside ShellProvider");
  }
  return ctx;
}
