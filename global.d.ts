interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;

  addEventListener(
    type: "chargingchange" | "levelchange",
    listener: (this: BatteryManager, ev: Event) => void
  ): void;
  removeEventListener(
    type: "chargingchange" | "levelchange",
    listener: (this: BatteryManager, ev: Event) => void
  ): void;
}

interface Navigator {
  getBattery?: () => Promise<BatteryManager>;
}
