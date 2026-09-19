export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  forWho: string;
  deliverables: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    slug: "laravel-cms",
    title: "Laravel & CMS rebuilds",
    eyebrow: "Rebuilds",
    summary:
      "When WordPress or a dated PHP app is in the way: a Laravel or Next.js rebuild you can actually maintain.",
    forWho:
      "Teams whose site is slow, insecure, or impossible to edit without a developer on call.",
    deliverables: [
      "Audit of what to keep, cut, and rewrite",
      "Laravel or headless rebuild",
      "Admin or CMS your team can use",
      "Migration of the pages that still matter",
    ],
    timeline: "Scoped after a short audit",
  },
  {
    slug: "ecommerce-booking",
    title: "Booking, checkout, payments",
    eyebrow: "Payments",
    summary:
      "Catalogue, cart, or appointment flows. Gateway, confirmations, not a plugin bolted on.",
    forWho:
      "Clinics, salons, and shops stuck on WhatsApp or a clunky plugin.",
    deliverables: [
      "Service or product structure that matches how you sell",
      "Checkout or booking with a payment gateway",
      "Confirmation states and mobile-first flows",
      "Handover so you can update the catalogue",
    ],
    timeline: "Typically 4–8 weeks",
  },
  {
    slug: "brand-websites",
    title: "Custom websites",
    eyebrow: "Sites",
    summary:
      "A Next.js site that is fast, clear, and yours — not a theme with a logo dropped in.",
    forWho:
      "Owner-led brands, clinics, and studios who need a real site.",
    deliverables: [
      "Information architecture and page structure",
      "Next.js build, responsive and fast",
      "Contact or lead capture that actually arrives",
      "Basic SEO: titles, sitemap, structured data",
    ],
    timeline: "Typically 3–6 weeks",
  },
  {
    slug: "retainers",
    title: "Care & retainers",
    eyebrow: "After launch",
    summary:
      "The work does not end at launch. Hours for fixes, small features, and upkeep.",
    forWho:
      "People who want one engineer who already knows the codebase.",
    deliverables: [
      "Monthly hours for fixes and small changes",
      "Dependency and security hygiene",
      "Performance and content tweaks",
      "A single thread when something breaks",
    ],
    timeline: "Month to month",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}
