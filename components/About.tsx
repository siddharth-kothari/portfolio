import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl">
      <h2 className="text-3xl text-center font-bold mb-3">About Me</h2>
      <p className="max-w-3xl text-center mb-5 mx-auto">
        With over three years of experience, I specialize in creating dynamic and responsive web applications using technologies like PHP, Next.js, and React.js.
      </p>
      <div className="block md:flex gap-10 items-end">
        <Image 
            src="/avatar.png"
            alt="Siddharth's Avatar"
            width={200}
            height={200}
            className="mx-auto mb-5 md:mb-0"
        />
        <p className="opacity-70">I&apos;m a dedicated full-stack web developer with over three years of experience in crafting dynamic and responsive web applications. His journey in technology has equipped him with a diverse skill set, including proficiency in PHP, Next.js, and React.js. I&apos;m passionate about creating seamless user interfaces and specializes in Tailwind CSS for styling, ensuring that every project is visually appealing and user-friendly. His expertise extends to API development and robust backend solutions using Laravel, complemented by strong database management skills in MySQL. I&apos;m committed to delivering high-quality applications that meet client needs and enhance user experience.</p>
      </div>
    </div>
  );
};

export default About;
