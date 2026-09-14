import type { Metadata } from "next";
import { ServicesIndex } from "@/components/apps/ServicesIndex";
import { getSiteUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
  description: "Custom brand websites, booking and commerce, Laravel rebuilds, and retainers.",
  alternates: { canonical: `${getSiteUrl()}/services` },
};

export default function ServicesPage() {
  return <ServicesIndex />;
}
