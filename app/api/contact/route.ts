import { NextRequest } from "next/server";
import sendgrid from "@sendgrid/mail";
import { verifyCaptcha } from "@/lib/captcha";
import { isRateLimited } from "@/lib/rate-limit";
import { escapeHtml, isValidEmail } from "@/lib/utils";

const ALLOWED_TYPES = [
  "Custom brand websites",
  "E-commerce & booking",
  "Laravel & CMS rebuilds",
  "Care & retainers",
  "Something else",
];

const ALLOWED_BUDGETS = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+", "Not sure yet"];

function json(status: number, message: string) {
  return Response.json({ status, message }, { status });
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return json(429, "Too many messages from this network. Try again later.");
    }

    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const projectType = String(body.projectType ?? "").trim();
    const budget = String(body.budget ?? "").trim();
    const token = String(body.token ?? "").trim();

    if (name.length < 2 || name.length > 80) {
      return json(400, "Please enter a valid name.");
    }
    if (!isValidEmail(email)) {
      return json(400, "Please enter a valid email.");
    }
    if (message.length < 10 || message.length > 2000) {
      return json(400, "Message should be between 10 and 2000 characters.");
    }
    if (projectType && !ALLOWED_TYPES.includes(projectType)) {
      return json(400, "Invalid project type.");
    }
    if (budget && !ALLOWED_BUDGETS.includes(budget)) {
      return json(400, "Invalid budget.");
    }
    if (!token) {
      return json(400, "Captcha token missing.");
    }

    const verified = await verifyCaptcha(token);
    if (!verified) {
      return json(400, "Captcha verification failed.");
    }

    if (!process.env.SENDGRID_API_KEY) {
      return json(500, "Mail is not configured.");
    }

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const safeType = escapeHtml(projectType || "Not specified");
    const safeBudget = escapeHtml(budget || "Not specified");

    await sendgrid.send({
      to: "sidkothari005@gmail.com",
      from: "hi@siddharthkothari.com",
      subject: `New enquiry from ${name}`,
      text: `${name} (${email})\nType: ${projectType}\nBudget: ${budget}\n\n${message}`,
      html: `<p><strong>${safeName}</strong> (${safeEmail})</p><p>Type: ${safeType}<br>Budget: ${safeBudget}</p><p>${safeMessage}</p>`,
    });

    return json(200, "Email sent. I will get back to you shortly.");
  } catch (error) {
    console.error("Error sending email:", error);
    return json(500, "Failed to send email.");
  }
}
