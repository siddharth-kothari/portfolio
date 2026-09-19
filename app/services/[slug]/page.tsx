import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/apps/ServiceDetail";
import { getService, getServiceSlugs } from "@/data/services";
import { getSiteUrl } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Siddharth Kothari`,
    description: service.summary,
    alternates: { canonical: `${getSiteUrl()}/services/${service.slug}` },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
