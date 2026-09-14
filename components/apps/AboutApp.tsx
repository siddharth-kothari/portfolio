import Image from "next/image";
import Link from "next/link";
import { experience, processSteps, site, tools } from "@/data/site";

export function AboutApp() {
  return (
    <div className="app-page">
      <header className="app-hero">
        <p className="eyebrow">Notes</p>
        <h1>About {site.firstName}</h1>
        <p className="lede">{site.headline}</p>
      </header>

      <div className="grid items-start gap-8 md:grid-cols-[200px_1fr]">
        <Image
          src="/avatar.webp"
          alt={site.name}
          width={200}
          height={200}
          className="rounded-2xl object-cover"
        />
        <div className="space-y-4 text-[15px] leading-relaxed opacity-85">
          <p>
            I am a full-stack developer based in {site.location.split("·")[0].trim()}, working remotely
            with owner-led businesses. I care about sites that load quickly, read clearly, and make
            the next step obvious.
          </p>
          <p>
            Days are spent shipping at i2e Consulting. Before that I trained on the same team, and
            interned at DigiLocker testing real products used by millions. Freelance is where I take
            the same craft to brands, clinics, and studios who want a site that feels theirs.
          </p>
          <p>Outside the machine: new places, photography, and the occasional open-source rabbit hole.</p>
        </div>
      </div>

      <section className="mt-12">
        <h2>How we work</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl bg-black/5 p-4 dark:bg-white/5">
              <p className="text-xs opacity-50">0{index + 1}</p>
              <h3 className="mt-2 font-serif text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2>Experience</h2>
        <ol className="mt-5 space-y-6">
          {experience.map((item) => (
            <li key={item.period}>
              <p className="text-xs uppercase tracking-[0.16em] opacity-50">{item.period}</p>
              <p className="mt-1 font-medium">
                {item.title} · {item.company}
              </p>
              <ul className="mt-2 space-y-1 text-sm opacity-75">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2>Tools I use</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {Object.entries(tools).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs uppercase tracking-[0.16em] opacity-50">{group}</p>
              <p className="mt-2 text-sm">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <Link href="/contact" className="mac-btn mt-10 inline-flex">
        Work with me
      </Link>
    </div>
  );
}
