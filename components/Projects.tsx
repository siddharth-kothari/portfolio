import React from "react";
import { ProjectCard } from "./ui/project-card";

const Projects = () => {
  const projects = [
    {
      image: "/facing_east_studios.png",
      title: "Facing East Studios",
      description:
        "Currently working on a website for a brand offering services in brand identity, label design, ad campaigns, and digital marketing. The project focuses on presenting their creative solutions in a compelling and user-friendly way.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
      date: "Ongoing",
      link: "#",
    },
    {
      image: "/dental_care_solutions.png",
      title: "Dental Care Solutions",
      description:
        "Developed a website for a dental clinic in Pune, highlighting their treatments and community outreach efforts for underprivileged children. The site focuses on both their services and social impact, offering an engaging and informative experience.",
      techUsed: ["Laravel", "GSAP", "Tailwind CSS"],
      date: "October 2024",
      link: "https://dental-care-solutions.in/",
    },
    {
      image: "/cartify.png",
      title: "Cartify",
      description:
        "A fully functional e-commerce platform built using Next.js, next-auth and tailwindcss , featuring user authentication, product management, and a secure payment gateway. ",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
      date: "January 2024",
      link: "https://cartify.siddharthkothari.com/",
    },
    {
      image: "/glam2door.png",
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
    <div className="max-w-7xl">
      <h2 className="text-3xl text-center font-bold mb-3">Featured Projects</h2>
      <p className="max-w-3xl text-center mb-20 mx-auto">
        Explore my dynamic web solutions crafted with React.js and Laravel,
        showcasing seamless user experiences and robust functionalities.
      </p>
      <div className="">
        <p className="tracking-widest uppercase font-extralight">
          Featured Projects
        </p>
        <h2 className="text-3xl font-bold my-3">Explore My Work</h2>
        <p className="tracking-wide font-extralight">
          Discover the projects I’ve developed, showcasing my skills in web
          development and design.{" "}
        </p>
        <hr className="my-10 border-t border-gray-300 dark:border-gray-600" />
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              project={project}
              isImageLeft={index % 2 === 0} // Alternate layout
            />
            {/* Add an <hr> tag after each project except the last one */}
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
