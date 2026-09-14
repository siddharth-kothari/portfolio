import type { Metadata } from "next";
import { AboutApp } from "@/components/apps/AboutApp";
import { getSiteUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.description,
  alternates: { canonical: `${getSiteUrl()}/about` },
};

export default function AboutPage() {
  return <AboutApp />;
}
