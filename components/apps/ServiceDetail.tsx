import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article className="app-page">
      <p className="eyebrow">
        <Link href="/services" className="hover:underline">
          Services
        </Link>{" "}
        / {service.eyebrow}
      </p>
      <h1>{service.title}</h1>
      <p className="lede">{service.summary}</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section>
          <h2>Who it is for</h2>
          <p>{service.forWho}</p>
        </section>
        <section>
          <h2>Timeline</h2>
          <p>{service.timeline}</p>
        </section>
      </div>

      <section className="mt-8">
        <h2>What you get</h2>
        <ul className="mt-3 space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <Link href="/contact" className="mac-btn mt-10 inline-flex">
        Enquire about this
      </Link>
    </article>
  );
}
