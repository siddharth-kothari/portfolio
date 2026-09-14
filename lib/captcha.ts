type RecaptchaResponse = {
  success?: boolean;
  score?: number;
};

export async function verifyCaptcha(token: string) {
  const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error("No secret key found.");
  }

  const url = new URL("https://www.google.com/recaptcha/api/siteverify");
  url.searchParams.append("secret", secretKey);
  url.searchParams.append("response", token);

  const res = await fetch(url, { method: "POST" });
  const data = (await res.json()) as RecaptchaResponse;

  return Boolean(data.success) && (data.score ?? 0) >= 0.5;
}
