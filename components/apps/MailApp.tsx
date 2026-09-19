"use client";

import { useCallback, useState, type ReactNode } from "react";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { site } from "@/data/site";
// import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const budgets = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+", "Not sure yet", "Not applicable"];
//
// const projectTypes = [
//   ...services.map((service) => service.title),
//   "Hiring / a role",
//   "Something else",
// ];

const socials = [
  { href: site.github, icon: IconBrandGithub, label: "GitHub" },
  { href: site.instagram, icon: IconBrandInstagram, label: "Instagram" },
  { href: site.whatsapp, icon: IconBrandWhatsapp, label: "WhatsApp" },
  { href: site.linkedin, icon: IconBrandLinkedin, label: "LinkedIn" },
];

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function MailForm() {
  const [token, setToken] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  // const [projectType, setProjectType] = useState("Something else");
  // const [budget, setBudget] = useState("Not applicable");

  const onVerify = useCallback((next: string) => {
    setToken(next);
  }, []);

  async function onSubmit(form: FormData) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          token,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed");
      }
      setStatus("sent");
      setMessage(data.message);
    } catch {
      setRefresh((value) => !value);
      setStatus("error");
      setMessage("The message did not send. Try again, or write me directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="px-8 py-8 text-center">
        <p className="eyebrow">Mail</p>
        <h1 className="mt-2 font-serif text-4xl">Sent.</h1>
        <p className="lede mx-auto">{message || "I will get back to you shortly."}</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-7">
        <header className="mb-6 text-center">
          <p className="eyebrow">Mail</p>
          <h1 className="mt-2 font-serif text-[2rem] leading-tight">Get in touch.</h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed opacity-70">
            A project, a role, or a question. I usually reply within a couple of days.
          </p>
        </header>

        <form action={onSubmit} className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <Input
                id="name"
                required
                name="name"
                minLength={2}
                maxLength={80}
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <Input
                id="email"
                required
                type="email"
                name="email"
                placeholder="jane@studio.com"
                autoComplete="email"
              />
            </Field>
          </div>

          {/* <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Project type" htmlFor="projectType">
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger id="projectType" aria-label="Project type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Budget" htmlFor="budget">
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger id="budget" aria-label="Budget">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {budgets.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div> */}

          <Field label="Message" htmlFor="message">
            <Textarea
              id="message"
              required
              name="message"
              minLength={10}
              maxLength={2000}
              rows={4}
              placeholder="What do you need, and when?"
              className="resize-y"
            />
          </Field>

          <Button type="submit" disabled={status === "sending"} className="mt-1 w-full">
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
          {status === "error" && <p className="text-sm text-red-500">{message}</p>}
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-black/10 dark:border-white/10" />
          </div>
          <div className="relative flex justify-center text-[11px] uppercase tracking-[0.18em] opacity-50">
            <span className="bg-(--mac-window) px-3">Let’s connect on</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {socials.map(({ href, icon: Icon, label }) => (
            <Button key={label} variant="ghost" size="icon" asChild>
              <Link href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>

        <GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refresh} />
    </div>
  );
}

export function MailApp() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

  if (!key) {
    return (
      <div className="px-8 py-8 text-center">
        <h1 className="font-serif text-4xl">Mail</h1>
        <p className="lede mx-auto">
          Write directly to{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={key}>
      <MailForm />
    </GoogleReCaptchaProvider>
  );
}
