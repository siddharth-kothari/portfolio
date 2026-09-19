export const site = {
  name: "Siddharth Kothari",
  firstName: "Siddharth",
  role: "Software Engineer, Backend",
  headline:
    "I build the backends and the websites that sit on them — fast, clear, meant to last.",
  shortHeadline: "Software Engineer, Backend",
  availability: "Open for freelance",
  availabilityNote: "Booking new projects for the coming quarter",
  location: "India · Remote worldwide",
  email: "hi@siddharthkothari.com",
  url: process.env.NEXT_URL || "https://siddharthkothari.com",
  github: "https://github.com/siddharth-kothari",
  linkedin: "https://www.linkedin.com/in/siddharthkothari01/",
  instagram: "https://instagram.com/_siddharthkothari_",
  whatsapp: "https://wa.me/918208567642",
  keywords:
    "software engineer backend, Laravel, Next.js, APIs, booking websites, India",
  description:
    "Siddharth Kothari is a software engineer, backend, based in India. Laravel, APIs, payments, and custom websites — plus independent rebuilds and booking work.",
};

export const processSteps = [
  {
    title: "Discover",
    body: "A short call to understand the business, the audience, and what the site has to do. I leave with a clear scope — not a vague moodboard.",
  },
  {
    title: "Design",
    body: "Structure, type, and pages that already think about conversion. You review real screens, not a 40-slide deck.",
  },
  {
    title: "Build",
    body: "Next.js or Laravel, depending on the job. Fast pages, clean CMS or admin where you need it, forms that actually arrive.",
  },
  {
    title: "Launch",
    body: "Domain, analytics, and a handover you can live with. Optional care so the site does not rot after week one.",
  },
] as const;

export const tools = {
  Backend: ["Laravel", "PHP", "MySQL", "REST APIs"],
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Product: ["WordPress", "Razorpay", "Git", "SEO"],
} as const;

export const experience = [
  {
    period: "Aug 2022 — Present",
    title: "Software Developer",
    company: "i2e Consulting",
    points: [
      "Shipped features for the in-house Pats! product and client sites in PHP, HTML, and JavaScript.",
      "Built REST APIs, payment flows (Razorpay), and the validation that keeps those forms honest.",
    ],
  },
  {
    period: "Mar 2022 — Aug 2022",
    title: "Student Trainee",
    company: "i2e Consulting",
    points: [
      "Shipped pages for the company site and wrote API calls for new Pats! features.",
    ],
  },
  {
    period: "Jan 2021 — May 2021",
    title: "UI / functionality tester intern",
    company: "DigiLocker",
    points: [
      "Tested Android apps and web surfaces against the intended design, and filed the reports that got bugs fixed.",
    ],
  },
] as const;

export function getSiteUrl() {
  return site.url.replace(/\/$/, "");
}

export function isProduction() {
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }
  return process.env.NODE_ENV === "production";
}
