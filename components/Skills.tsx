"use client"

import React from 'react'
import SkillCard from './ui/skill-card';
import { bootstrap, git, javascript, laravel, mysql, nextjs, php, react, restApi, tailwind, typescript, wordpress } from '@/assets';

const Skills = () => {

    const skillsData = [
        { name: "JavaScript", logo: javascript },
        { name: "React", logo: react },
        { name: "Tailwind CSS", logo: tailwind },
        { name: "TypeScript", logo: typescript },
        { name: "NextJS", logo: nextjs },
        { name: "Git", logo: git },
        { name: "Rest API", logo: restApi },
        { name: "Bootstrap", logo: bootstrap },
        { name: "PHP", logo: php },
        { name: "Laravel", logo: laravel },
        { name: "MySQL", logo: mysql },
        { name: "Wordpress", logo: wordpress },
      ];

  return (
    <div className="flex">
      <SkillCard skills={skillsData} />
    </div>
  )
}

export default Skills