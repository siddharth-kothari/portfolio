"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Contact = () => {
  console.log("Contact component rendered");
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const setTokenFunc = useCallback((getToken: string) => {
    setToken((prevToken) => {
      if (prevToken === getToken) return prevToken;
      return getToken;
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    const body = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error submitting the form");
      }

      const result = await response.json();
      alert(result.message);
    } catch (err) {
      // Only toggle refresh when necessary
      setRefreshReCaptcha((prev) => !prev);
      console.error(err);
    }
  };

  const SubmitButton = () => {
    const data = useFormStatus();
    return (
      <button
        disabled={data.pending}
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      >
        {data.pending ? "Submitting..." : "Submit"}
        <BottomGradient />
      </button>
    );
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

  const stableRefreshReCaptcha = useMemo(
    () => refreshReCaptcha,
    [refreshReCaptcha]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl text-center font-bold mb-3">
        Let&apos;s Connect
      </h2>
      <p className="max-w-3xl text-center mb-12 mx-auto">
        Got a question or project in mind? Let&apos;s get in touch!
      </p>
      <form className="my-8" action={onSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="John Doe" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              type="email"
              name="email"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            rows={4}
            name="message"
            id="message"
            placeholder="Your message..."
          />
        </LabelInputContainer>
        <SubmitButton />
      </form>

      <GoogleReCaptcha
        onVerify={setTokenFunc}
        refreshReCaptcha={stableRefreshReCaptcha}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs tracking-widest uppercase">
          <span className="bg-white dark:bg-[#333] px-2">Let’s connect on</span>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-center my-7">
        <Link href="https://github.com/siddharth-kothari" target="_blank">
          <IconBrandGithub className="w-7 h-7 text-black dark:text-white transition-transform transform hover:scale-125 duration-300" />
        </Link>
        <Link href="https://instagram.com/_siddharthkothari_" target="_blank">
          <IconBrandInstagram className="w-7 h-7 text-black dark:text-white transition-transform transform hover:scale-125 duration-300" />
        </Link>
        <Link href="https://wa.me/918208567642" target="_blank">
          <IconBrandWhatsapp className="w-7 h-7 text-black dark:text-white transition-transform transform hover:scale-125 duration-300" />
        </Link>
        <Link href="https://www.linkedin.com/in/siddharthkothari01/" target="_blank">
          <IconBrandLinkedin className="w-7 h-7 text-black dark:text-white transition-transform transform hover:scale-125 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
