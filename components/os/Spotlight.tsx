"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { apps } from "@/data/apps";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { useShell } from "./shell-context";

type Hit = { href: string; title: string; subtitle: string };

export function Spotlight() {
  const { spotlightOpen, setSpotlightOpen } = useShell();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const hits = useMemo<Hit[]>(() => {
    const q = query.trim().toLowerCase();
    const all: Hit[] = [
      ...apps.map((app) => ({ href: app.href, title: app.name, subtitle: "Application" })),
      ...projects.map((project) => ({
        href: `/work/${project.slug}`,
        title: project.title,
        subtitle: "Work",
      })),
      ...services.map((service) => ({
        href: `/services/${service.slug}`,
        title: service.title,
        subtitle: "Services",
      })),
    ];
    if (!q) return all.slice(0, 8);
    return all.filter((item) => `${item.title} ${item.subtitle}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  const safeActive = hits.length === 0 ? 0 : Math.min(active, hits.length - 1);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSpotlightOpen(true);
      }
      if (event.key === "Escape") setSpotlightOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSpotlightOpen]);

  if (!spotlightOpen) return null;

  const go = (href: string) => {
    setSpotlightOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-[70] bg-black/25 p-4" onClick={() => setSpotlightOpen(false)}>
      <div
        className="mac-spotlight mx-auto mt-[12vh] w-full max-w-xl overflow-hidden backdrop-blur-md"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          autoFocus
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((value) => Math.min(value + 1, hits.length - 1));
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((value) => Math.max(value - 1, 0));
            }
            if (event.key === "Enter" && hits[safeActive]) go(hits[safeActive].href);
          }}
          placeholder="Search Work, Services, Mail…"
          className="w-full border-b border-black/10 bg-transparent px-5 py-4 text-lg outline-none dark:border-white/10"
        />
        <ul className="max-h-80 overflow-y-auto p-2">
          {hits.length === 0 && (
            <li className="px-3 py-6 text-center text-sm opacity-60">No results</li>
          )}
          {hits.map((hit, index) => (
            <li key={hit.href}>
              <button
                type="button"
                onClick={() => go(hit.href)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left ${
                  index === safeActive ? "bg-sky-500 text-white" : "hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                <span className="font-medium">{hit.title}</span>
                <span className="text-xs opacity-70">{hit.subtitle}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
