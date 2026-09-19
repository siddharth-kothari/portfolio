import type { Metadata } from "next";
import { ServicesIndex } from "@/components/apps/ServicesIndex";
import { getSiteUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
  description: "Laravel rebuilds, booking and payments, custom websites, and retainers.",
  alternates: { canonical: `${getSiteUrl()}/services` },
};

export default function ServicesPage() {
  return <ServicesIndex />;
}
