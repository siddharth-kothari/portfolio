"use client";

import React from "react";
import { ProjectCard } from "./ui/project-card";
import {
  cartify,
  core_value,
  dental_care_solutions,
  facing_east_studios,
  glam2door,
} from "@/assets";

const Projects = () => {
  const projects = [
    {
      image: core_value,
      title: "Core",
      description:
        "Developed a clean and responsive website for a furniture and surface solutions brand. Built to ensure smooth navigation, fast performance, and a seamless browsing experience.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
      date: "September 2025",
      link: "https://core-value.in/",
    },
    {
      image: facing_east_studios,
      title: "Facing East Studios",
      description:
        "Built a modern and minimal website for an ad agency to showcase their work and services. Focused on stability, performance, and delivering a polished user experience.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
      date: "May 2025",
      link: "https://facingeast.studio/",
    },
    {
      image: dental_care_solutions,
      title: "Dental Care Solutions",
      description:
        "Developed a website for a dental clinic in Pune, highlighting their treatments and community outreach efforts for underprivileged children. The site focuses on both their services and social impact, offering an engaging and informative experience.",
      techUsed: ["Laravel", "GSAP", "Tailwind CSS"],
      date: "October 2024",
      link: "https://dental-care-solutions.in/",
    },
    {
      image: cartify,
      title: "Cartify",
      description:
        "A fully functional e-commerce platform built using Next.js, next-auth and tailwindcss , featuring user authentication, product management, and a secure payment gateway.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
      date: "January 2024",
      link: "https://cartify.siddharthkothari.com/",
    },
    {
      image: glam2door,
      title: "Glam2door - Salon at Home",
      description:
        "Developed a sleek and user-friendly website for Glam2Door, a salon-at-home services business. The platform showcases services and allows users to easily book appointments online.",
      techUsed: ["Next.js", "Tailwind CSS", "Framer Motion"],
      date: "November 2023",
      link: "https://www.glam2door.com/",
    },
    // Add more projects here...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <h2 className="text-3xl text-center font-bold mb-3">Featured Projects</h2>
      <p className="max-w-3xl text-center mb-20 mx-auto">
        Explore my dynamic web solutions crafted with React.js and Laravel,
        showcasing seamless user experiences and robust functionalities.
      </p>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              project={project}
              isImageLeft={index % 2 === 0} // Alternate layout
            />
            {index < projects.length - 1 && (
              <hr className="my-10 border-t border-gray-300 dark:border-gray-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
