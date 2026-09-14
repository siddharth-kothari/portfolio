import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="app-page">
      <p className="eyebrow">
        <Link href="/work" className="hover:underline">
          Work
        </Link>{" "}
        / {project.title}
      </p>
      <h1 className="max-w-3xl">{project.title}</h1>
      <p className="lede">{project.tagline}</p>

      <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 900px, 100vw"
          priority
        />
      </div>

      <dl className="grid gap-6 md:grid-cols-3">
        <div>
          <dt>The brief</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>What I built</dt>
          <dd>{project.built}</dd>
        </div>
        <div>
          <dt>The result</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {project.tech.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={project.link} target="_blank" rel="noreferrer" className="mac-btn">
          View live site
        </a>
        <Link href="/contact" className="mac-btn-secondary">
          Start a similar project
        </Link>
      </div>
    </article>
  );
}
