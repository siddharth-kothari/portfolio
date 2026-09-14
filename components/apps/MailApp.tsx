"use client";

import { useCallback, useState } from "react";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

const budgets = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+", "Not sure yet"];

function MailForm() {
  const [token, setToken] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

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
          projectType: form.get("projectType"),
          budget: form.get("budget"),
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
      <div className="app-page">
        <p className="eyebrow">Mail</p>
        <h1>Sent.</h1>
        <p className="lede">{message || "I will get back to you shortly."}</p>
      </div>
    );
  }

  return (
    <div className="app-page">
      <header className="app-hero">
        <p className="eyebrow">Mail</p>
        <h1>Tell me about the project.</h1>
        <p className="lede">
          A few details are enough. I usually reply within a couple of days. You can also{" "}
          <Link href={site.whatsapp} className="underline">
            WhatsApp
          </Link>{" "}
          or{" "}
          <Link href={site.linkedin} className="underline">
            LinkedIn
          </Link>
          .
        </p>
      </header>

      <form action={onSubmit} className="grid max-w-xl gap-4">
        <label className="grid gap-1.5 text-sm">
          Name
          <input required name="name" minLength={2} maxLength={80} className="mac-field" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Email
          <input required type="email" name="email" className="mac-field" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Project type
          <select name="projectType" className="mac-field" defaultValue={services[0]?.title}>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          Budget
          <select name="budget" className="mac-field" defaultValue={budgets[4]}>
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          Message
          <textarea
            required
            name="message"
            minLength={10}
            maxLength={2000}
            rows={5}
            className="mac-field resize-y"
            placeholder="What are you building, and when do you want it live?"
          />
        </label>
        <button type="submit" disabled={status === "sending"} className="mac-btn mt-2 w-fit">
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && <p className="text-sm text-red-500">{message}</p>}
      </form>

      <GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refresh} />
    </div>
  );
}

export function MailApp() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

  if (!key) {
    return (
      <div className="app-page">
        <h1>Mail</h1>
        <p className="lede">
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
