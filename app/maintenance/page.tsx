import type { Metadata } from "next";
import { MaintenanceScreen } from "@/components/os/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Updating",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceScreen />;
}
