"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl">
      <div className="text-black dark:text-white py-8 px-4 sm:px-8">
      {/* About Section (Introduction) */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm <span className="text-cyan-500">Siddharth</span></h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          I'm a passionate full-stack web developer with a focus on building modern, user-centric web applications.
          I specialize in technologies like React, Laravel, Next.js, and Tailwind CSS, and I'm always learning new tools
          and frameworks to stay up-to-date with the evolving web landscape.
        </p>
        <p className="text-gray-400 text-sm">
          Currently working as a Software Developer at i2e Consulting Pvt Ltd
        </p>
      </section>

      {/* Personal Interests Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Outside of Work</h2>
        <p className="text-lg max-w-3xl mx-auto text-center">
          When I&apos;m not coding, I enjoy exploring new places, photography, and experimenting with different types of design.
          I am passionate about learning new technologies and regularly contribute to open-source projects. I am always excited
          to collaborate with like-minded individuals on innovative projects.
        </p>
      </section>
    </div>
    </div>
  );
};

export default About;
