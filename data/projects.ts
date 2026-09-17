import {
  cartify,
  core_value,
  dental_care_solutions,
  facing_east_studios,
  glam2door,
} from "@/assets";
import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  built: string;
  result: string;
  tech: string[];
  date: string;
  link: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    slug: "core",
    title: "Core",
    tagline: "Next.js marketing site for a furniture brand — fast enough to feel like the showroom.",
    description:
      "A Next.js and TypeScript marketing site for a furniture and surface-solutions brand — built to stay light on a phone.",
    problem:
      "Core sells physical product. The site had to carry that quality without template clutter or sluggish galleries.",
    built:
      "Next.js and TypeScript with a tight information architecture, responsive product pages, and performance work so loads stay light.",
    result:
      "A site buyers can share: calm navigation, fast pages, no CMS theme in the way.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "September 2025",
    link: "https://core-value.in/",
    image: core_value,
  },
  {
    slug: "facing-east-studios",
    title: "Facing East Studios",
    tagline: "Next.js studio site: selected work first, no CMS theme.",
    description:
      "A Next.js site for an ad studio — stable, fast, and structured so the reel does the talking.",
    problem:
      "Agency sites either over-build themselves or look like a CMS theme. Facing East needed selected work first, and a site that stays up.",
    built:
      "A Next.js site with a restrained layout, motion only where it helps, and a structure that puts work first.",
    result:
      "A first impression you can send after a call — spare, reliable, not a theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "May 2025",
    link: "https://facingeast.studio/",
    image: facing_east_studios,
  },
  {
    slug: "dental-care-solutions",
    title: "Dental Care Solutions",
    tagline: "Laravel clinic site — treatments, outreach, readable on a phone.",
    description:
      "A Laravel site for a Pune dental clinic — treatment pages, community outreach, and a layout that stays readable on mobile.",
    problem:
      "The practice needed treatments and a community story in one product, not a brochure template that splits into two sites.",
    built:
      "Laravel and Tailwind, GSAP used sparingly for section rhythm, clear treatment routes, and a path for outreach content.",
    result:
      "Patients can find care; visitors can read the mission. One codebase, two jobs.",
    tech: ["Laravel", "GSAP", "Tailwind CSS"],
    date: "October 2024",
    link: "https://dental-care-solutions.in/",
    image: dental_care_solutions,
  },
  {
    slug: "glam2door",
    title: "Glam2door",
    tagline: "Salon-at-home booking: services and the appointment on one path.",
    description:
      "A booking-led Next.js site for a salon-at-home business — services on display, appointments a tap away.",
    problem:
      "If booking is awkward, the phone starts ringing. The site had to show the service and take the appointment without a scavenger hunt.",
    built:
      "A Next.js marketing and booking surface with light motion and a layout that keeps services and the ask on the same path.",
    result:
      "Browse, choose, book — a front desk in the browser, not a brochure plus a WhatsApp link.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    date: "November 2023",
    link: "https://www.glam2door.com/",
    image: glam2door,
  },
  {
    slug: "cartify",
    title: "Cartify",
    tagline: "Storefront with auth, catalogue, and checkout wired end to end.",
    description:
      "A Next.js storefront with authentication, product management, and a payment path — a working shop, not a mock.",
    problem:
      "Most demo shops stop at a pretty grid. Cartify needed auth, catalogue, and checkout without a broken state.",
    built:
      "Next.js, TypeScript, NextAuth, and Tailwind — product flows plus a payment gateway wired end to end.",
    result:
      "A store you can sign into, shop, and check out. The same muscles used on client commerce work.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "January 2024",
    link: "https://cartify.siddharthkothari.com/",
    image: cartify,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
