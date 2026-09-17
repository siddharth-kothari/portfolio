import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function WorkIndex() {
  return (
    <div className="app-page">
      <header className="app-hero">
        <p className="eyebrow">Selected work</p>
        <h1>Selected work.</h1>
        <p className="lede">
          Sites in production — and the booking, payments, and CMS work underneath.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] opacity-50">{project.date}</p>
              <h2 className="mt-2 font-serif text-2xl">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
