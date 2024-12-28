// global.d.ts
interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  
    addEventListener(
      type: "chargingchange" | "levelchange",
      listener: (this: BatteryManager, ev: Event) => any
    ): void;
  }
  
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
  