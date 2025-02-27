"use client"

import Button from "./ui/button";

const Introduction = ({openSpecificFolder}:any) => {
    return (
      <section className="flex flex-col items-center justify-center text-center p-4">
        <h1 className="font-bold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Hi, I'm <span className="bg-gradient-to-r from-[#1c6bbd] to-[#56ccf2] text-transparent bg-clip-text">Siddharth</span>
        </h1>
        <p className="text-xl mb-6 text-white max-w-3xl">
          I am a full-stack developer with a passion for creating dynamic and
          responsive web applications. I specialize in both front-end and back-end
          development, working with technologies like React, Next.js, Node.js, and
          Laravel.
        </p>
        <p className="text-lg text-white">
          Let's build something amazing together!
        </p>

        <div className="mt-5 grid space-y-5 md:flex md:gap-5 md:space-y-0">
          <Button text="Let's Connect" action={() => openSpecificFolder('contact')}/>
          <Button text="View My Work" action={() => openSpecificFolder('projects')}/>
        </div>
      </section>
    );
  };
  
  export default Introduction;
  