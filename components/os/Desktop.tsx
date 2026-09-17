"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Wallpaper } from "./Wallpaper";

function useToday() {
  const [today, setToday] = useState({ weekday: "", month: "", day: "" });

  useEffect(() => {
    const now = new Date();
    const id = window.setTimeout(() => {
      setToday({
        weekday: now.toLocaleString("en-US", { weekday: "long" }),
        month: now.toLocaleString("en-US", { month: "short" }).toUpperCase(),
        day: String(now.getDate()),
      });
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  return today;
}

export function Desktop() {
  const today = useToday();
  const featured = projects.slice(0, 3);

  return (
    <>
      <Wallpaper />

      <div className="absolute inset-x-4 top-14 z-10 max-w-3xl sm:left-10 sm:right-auto sm:top-16">
        <section className="desktop-glass rounded-3xl p-6 text-neutral-900 dark:text-white sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-800 dark:text-white/70">
            {site.location}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-neutral-800 dark:text-white/75">{site.role}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-800 dark:text-white/90 sm:text-base">
            {site.headline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/work" className="mac-btn-light">
              See selected work
            </Link>
            <Link href="/contact" className="mac-btn-ghost">
              Get in touch
            </Link>
          </div>
        </section>

        <div className="mt-4 grid gap-4 sm:grid-cols-[140px_minmax(0,200px)]">
          <div className="desktop-glass rounded-3xl p-4 text-center text-black dark:text-white">
            <p className="text-sm font-bold tracking-[0.18em] text-red-500">
              {today.month || "—"}
            </p>
            <p className="mt-1 font-serif text-5xl leading-none">{today.day || "—"}</p>
            <p className="mt-2 text-sm font-semibold tracking-wider capitalize text-neutral-800 dark:text-white/75">{today.weekday}</p>
          </div>

          {/* <div className="rounded-3xl border border-black/8 bg-[#fff6b0] p-4 text-[#3d3514] shadow-xl dark:border-white/20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5c4e1a]">
              Stickies
            </p>
            <p className="mt-2 font-serif text-xl leading-snug">
              Brand sites, booking flows, Laravel rebuilds.
            </p>
            <p className="mt-2 text-sm text-[#5c4e1a]/85">
              {site.availabilityNote}
            </p>
          </div> */}

          <div className="desktop-glass hidden rounded-3xl p-4 text-neutral-800 dark:text-white lg:block">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-800 dark:text-white/70">
              Shortcuts
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-neutral-800 dark:text-white/85">
              <li className="flex items-center justify-between gap-3">
                <span>Spotlight</span>
                <span className="flex items-center gap-1">
                  <kbd className="desktop-kbd" aria-label="Command">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                  </kbd>
                  <kbd className="desktop-kbd">K</kbd>
                </span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Close window</span>
                <kbd className="desktop-kbd">Esc</kbd>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Hide folder</span>
                <kbd className="desktop-kbd">Click</kbd>
              </li>
            </ul>
          </div>
        </div>

        <section className="mt-4 hidden sm:block">
          <p className="mb-2 px-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-800 dark:text-white/70">
            Recent files
          </p>
          <div className="grid grid-cols-3 gap-3">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="desktop-glass group overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] bg-black/10 dark:bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover object-[center_48%] transition duration-500 group-hover:scale-105"
                    sizes="220px"
                  />
                </div>
                <p className="truncate px-3 py-2 text-xs font-medium text-neutral-800 dark:bg-transparent dark:text-white">
                  {project.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
