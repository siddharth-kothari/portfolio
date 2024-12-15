"use client";

import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  project: {
    image: StaticImageData;
    title: string;
    description: string;
    techUsed: string[];
    date: string;
    link: string;
  };
  isImageLeft: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isImageLeft }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-6 md:gap-12 my-8`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      exit={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Section */}
      <motion.div
        className="flex-shrink-0 w-full md:w-[45%]"
        initial={{ x: isImageLeft ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: isImageLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          loading="lazy"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full md:w-[55%]"
        initial={{ x: isImageLeft ? 50 : -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: isImageLeft ? 50 : -50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
          <ul className="flex flex-wrap gap-2">
            {project.techUsed.map((tech, index) => (
              <li
                key={index}
                className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-lg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-gray-500 mb-4">Date: {project.date}</p>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 items-center hover:font-semibold font-extralight py-2 dark:text-gray-200 text-gray-700"
        >
          View Project
          <IconExternalLink className="w-5 h-5" />
        </Link>
      </motion.div>
    </motion.div>
  );
};
