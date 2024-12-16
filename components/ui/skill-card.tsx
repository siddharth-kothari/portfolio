"use client"

import Image, { StaticImageData } from "next/image";
import React from "react";

type Skill = {
  name: string;
  logo: StaticImageData; // Path to the logo image
};

type SkillCardProps = {
  skills: Skill[];
};

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:px-8 text-white rounded-lg">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center group">
          {/* Folder with imported image as background */}
          <div
            className="relative w-24 h-24 rounded-md cursor-pointer group-hover:brightness-110"
            style={{
              backgroundImage: `url(/folderIcon.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Skill Logo */}
            <Image
              src={skill.logo}
              alt={skill.name}
              className="absolute bottom-5 right-3 w-8 h-8"
            />
          </div>
          {/* Folder Label */}
          <span className="mt-2 text-sm dark:text-white text-black group-hover:text-cyan-500">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
