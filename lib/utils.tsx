import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function verifyCaptcha(token: string){
  const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("No secret key found.");
  }

  const url = new URL("https://www.google.com/recaptcha/api/siteverify");

  url.searchParams.append('secret', secretKey);
  url.searchParams.append('response', token);

  const res = await fetch(url, {
    method: 'POST'
  })

  const data = await res.json();

  return data.success;
}