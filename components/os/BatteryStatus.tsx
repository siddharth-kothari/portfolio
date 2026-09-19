"use client";

import { IconBoltFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type Battery = {
  level: number;
  charging: boolean;
};

export function BatteryStatus() {
  const [battery, setBattery] = useState<Battery | null>(null);

  useEffect(() => {
    if (!navigator.getBattery) return;

    let manager: BatteryManager | null = null;

    const sync = () => {
      if (!manager) return;
      setBattery({
        level: Math.round(manager.level * 100),
        charging: manager.charging,
      });
    };

    navigator.getBattery().then((next) => {
      manager = next;
      sync();
      manager.addEventListener("levelchange", sync);
      manager.addEventListener("chargingchange", sync);
    });

    return () => {
      manager?.removeEventListener("levelchange", sync);
      manager?.removeEventListener("chargingchange", sync);
    };
  }, []);

  if (!battery) return null;

  return (
    <span className="hidden items-center gap-1 sm:flex" title={`${battery.level}%`}>
      <span className="text-[11px] tabular-nums">{battery.level}%</span>
      <span className="relative h-2.5 w-5 rounded-[2px] border border-current/60">
        {battery.charging && <IconBoltFilled className="absolute inset-0 m-auto h-2.5 w-2.5" />}
        <span
          className="absolute bottom-px left-px top-px bg-current"
          style={{ width: `${Math.max(battery.level, 8)}%` }}
        />
      </span>
    </span>
  );
}
