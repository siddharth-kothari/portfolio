import type { Metadata } from "next";
import { WorkIndex } from "@/components/apps/WorkIndex";
import { getSiteUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: `Work — ${site.name}`,
  description: "Selected websites for brands, clinics, studios, and commerce.",
  alternates: { canonical: `${getSiteUrl()}/work` },
};

export default function WorkPage() {
  return <WorkIndex />;
}
