import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/apps/CaseStudy";
import { getProject, getProjectSlugs } from "@/data/projects";
import { getSiteUrl } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
    alternates: { canonical: `${getSiteUrl()}/work/${project.slug}` },
  };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
