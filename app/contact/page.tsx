import type { Metadata } from "next";
import { MailApp } from "@/components/apps/MailApp";
import { getSiteUrl, site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: "Start a project with Siddharth Kothari.",
  alternates: { canonical: `${getSiteUrl()}/contact` },
};

export default function ContactPage() {
  return <MailApp />;
}
