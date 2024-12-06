import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { IconCheck } from "@tabler/icons-react";

export function Experience() {
  const data = [
    {
      title: "Aug 2022 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-3xl font-semibold mb-4">
            Software Developer{" "}
            <span className="text-cyan-600">@ i2e Consulting Pvt Ltd</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70">
            Remote
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Developed 4-5 new features for the company's in-house project Pats!,
            enhancing user experience and functionality.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Created highly interactive and responsive webpages for a client
            project using PHP, HTML5, and JavaScript.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Ensured data security by implementing server side and client-side
            form validations and encryptions.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Implemented RESTful APIs to facilitate seamless communication
            between the front-end and back-end systems.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Integrated Razorpay payment gateway for an e-commerce project,
            streamlining payment processes.
          </p>
        </div>
      ),
    },
    {
      title: "Mar 2022 - Aug 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-3xl font-semibold mb-4">
            Student Trainee{" "}
            <span className="text-cyan-600">@ i2e Consulting Pvt Ltd</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70">
            Remote
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Collaborated with a team to create and deploy web pages for the company's website and external projects.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Wrote 2-3 API calls in PHP for some new features for the Pats! Application.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Worked on company's internal project called Pats along with other in-house projects.
          </p>
          
        </div>
      ),
    },
    {
      title: "Jan 2021 - May 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-3xl font-semibold mb-4">
            UI/UX & Functionality Tester Intern{" "}
            <span className="text-cyan-600">@ DigiLocker</span>
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70">
            Remote
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Worked as a functional tester for different android applications and websites while ensuring adherence to defined design.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Tested organization&apos;s site and versatile application to guarantee their smooth working.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Drafted 5+ point by point reports of loopholes and submitted to my lead.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 opacity-70 flex item-center gap-3">
            <span>
              <IconCheck className="text-cyan-600" />
            </span>{" "}
            Reported mistakes in the User Interface plan or usefulness for fixing.
          </p>
          
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
