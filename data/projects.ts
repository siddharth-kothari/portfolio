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
    tagline: "A furniture and surface brand that needed to look as considered as the product.",
    description:
      "A clean, fast marketing site for a furniture and surface-solutions brand — built so browsing feels quiet, premium, and obvious on a phone.",
    problem:
      "Core sells physical product with a strong material story. The site had to carry that quality without getting in the way — no template clutter, no sluggish galleries.",
    built:
      "A Next.js and TypeScript site with a tight information architecture, responsive product storytelling, and performance work so pages stay light.",
    result:
      "A brand surface that feels like the showroom: calm navigation, fast loads, and a path that is easy to share with buyers.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "September 2025",
    link: "https://core-value.in/",
    image: core_value,
  },
  {
    slug: "facing-east-studios",
    title: "Facing East Studios",
    tagline: "An ad studio that needed a site as sharp as the work they pitch.",
    description:
      "A modern, minimal website for an ad agency — stable, fast, and built to let the reel do the talking.",
    problem:
      "Agency sites either over-design themselves or look like a CMS theme. Facing East needed a portfolio that felt like the studio: confident, spare, and reliable.",
    built:
      "A Next.js site with a restrained layout, motion used only where it helps, and a structure that puts selected work first.",
    result:
      "A polished first impression for new-business conversations — the kind of site you are not embarrassed to send after a call.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "May 2025",
    link: "https://facingeast.studio/",
    image: facing_east_studios,
  },
  {
    slug: "dental-care-solutions",
    title: "Dental Care Solutions",
    tagline: "A Pune clinic site that holds both treatments and a community story.",
    description:
      "A Laravel site for a dental clinic — services, outreach for underprivileged children, and an experience that stays readable on mobile.",
    problem:
      "Clinics often get a brochure template. This practice also needed to talk about community work without the site feeling like two different products.",
    built:
      "A Laravel and Tailwind build with GSAP used sparingly for section rhythm, clear treatment pages, and a story path for outreach.",
    result:
      "Patients can find care; visitors can understand the mission. One site, two jobs, no noise.",
    tech: ["Laravel", "GSAP", "Tailwind CSS"],
    date: "October 2024",
    link: "https://dental-care-solutions.in/",
    image: dental_care_solutions,
  },
  {
    slug: "glam2door",
    title: "Glam2door",
    tagline: "Salon-at-home booking that had to feel as easy as the service.",
    description:
      "A booking-led website for a salon-at-home business — services on display, appointments a tap away.",
    problem:
      "If booking is awkward, the phone starts ringing instead. The site needed to sell the service and take the appointment without a scavenger hunt.",
    built:
      "A Next.js marketing and booking surface with Framer Motion for light delight and a layout that keeps services and the ask on the same path.",
    result:
      "A site that looks like a brand and behaves like a front desk — browse, choose, book.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    date: "November 2023",
    link: "https://www.glam2door.com/",
    image: glam2door,
  },
  {
    slug: "cartify",
    title: "Cartify",
    tagline: "A full e-commerce loop: accounts, catalogue, and checkout.",
    description:
      "A Next.js storefront with authentication, product management, and a secure payment path — useful as a product, not just a mock.",
    problem:
      "Most demo shops stop at a pretty grid. Cartify needed the unglamorous parts: auth, catalogue, and paying without a broken state.",
    built:
      "Next.js, TypeScript, NextAuth, and Tailwind — product flows plus a payment gateway wired end to end.",
    result:
      "A working store you can sign into, shop, and check out. The same muscles used on client commerce work.",
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
