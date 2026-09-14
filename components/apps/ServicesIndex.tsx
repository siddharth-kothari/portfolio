import Link from "next/link";
import { services } from "@/data/services";

export function ServicesIndex() {
  return (
    <div className="app-page">
      <header className="app-hero">
        <p className="eyebrow">Services</p>
        <h1>What I take on.</h1>
        <p className="lede">
          Custom websites, booking and commerce, and rebuilds for teams who have outgrown a theme.
          Projects typically start after a short call.
        </p>
      </header>

      <div className="grid gap-4">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-2xl border border-black/8 p-5 transition hover:bg-black/[0.03] dark:border-white/10 dark:hover:bg-white/[0.04] md:p-6"
          >
            <p className="eyebrow">{service.eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl">{service.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-75 md:text-base">
              {service.summary}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] opacity-50">{service.timeline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
