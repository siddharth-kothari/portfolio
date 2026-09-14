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
    slug: "brand-websites",
    title: "Custom brand websites",
    eyebrow: "Marketing sites",
    summary:
      "A site that looks like the business — not a theme with your logo dropped in. Built for first impressions, clarity, and the next enquiry.",
    forWho:
      "Studios, product brands, and owner-led companies who are tired of looking interchangeable.",
    deliverables: [
      "Information architecture and page design",
      "Next.js build, responsive and fast",
      "Contact or lead capture that actually arrives",
      "Basic SEO: titles, sitemap, structured data",
    ],
    timeline: "Typically 3–6 weeks",
  },
  {
    slug: "ecommerce-booking",
    title: "E-commerce & booking",
    eyebrow: "Commerce",
    summary:
      "Catalogue, cart, or appointment flows that do not fight the customer. Payments and confirmations included, not promised.",
    forWho:
      "Clinics, salons, and shops that lose bookings to WhatsApp ping-pong or a clunky plugin.",
    deliverables: [
      "Service or product structure that matches how you sell",
      "Checkout or booking with a payment gateway",
      "Confirmation states and mobile-first flows",
      "Handover so you can update the catalogue",
    ],
    timeline: "Typically 4–8 weeks",
  },
  {
    slug: "laravel-cms",
    title: "Laravel & CMS rebuilds",
    eyebrow: "Rebuilds",
    summary:
      "When WordPress or a dated PHP app is holding the business back — a cleaner Laravel or Next.js rebuild you can actually maintain.",
    forWho:
      "Teams with an existing site that is slow, insecure, or impossible to edit without a developer on call.",
    deliverables: [
      "Audit of what to keep, cut, and rewrite",
      "Laravel or headless rebuild",
      "Admin or CMS your team can use",
      "Migration of the pages that still matter",
    ],
    timeline: "Scoped after a short audit",
  },
  {
    slug: "retainers",
    title: "Care & retainers",
    eyebrow: "After launch",
    summary:
      "The site does not end at launch. Light retainers for fixes, small features, and the kind of upkeep that keeps you off emergency calls.",
    forWho:
      "Clients who want one person who already knows the codebase — not a new freelancer every quarter.",
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
