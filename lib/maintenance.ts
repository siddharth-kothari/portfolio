export const MAINTENANCE_COOKIE = "sk_gate";
export const MAINTENANCE_QUERY = "access";
export const MAINTENANCE_HEADER = "x-maintenance";

export function isMaintenanceEnabled() {
  const value = process.env.MAINTENANCE_MODE?.trim().toLowerCase();
  return value === "1" || value === "true";
}

export function getBypassSecret() {
  return process.env.MAINTENANCE_BYPASS_SECRET?.trim() ?? "";
}

export function getAllowedIps() {
  return (process.env.MAINTENANCE_ALLOWED_IPS ?? "")
    .split(",")
    .map((ip) => normalizeIp(ip.trim()))
    .filter(Boolean);
}

export function normalizeIp(ip: string) {
  if (ip.startsWith("::ffff:")) return ip.slice(7);
  if (ip === "::1") return "127.0.0.1";
  return ip;
}

export function clientIp(headers: Headers) {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const real = headers.get("x-real-ip")?.trim();
  const vercel = headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  return normalizeIp(forwarded || real || vercel || "");
}

export function secretsMatch(given: string, expected: string) {
  if (!expected || !given) return false;
  const encoder = new TextEncoder();
  const a = encoder.encode(given);
  const b = encoder.encode(expected);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i];
  return diff === 0;
}

export function isStaticPath(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.(?:avif|css|gif|ico|jpg|jpeg|js|json|map|png|svg|txt|webp|woff2?)$/i.test(pathname)
  );
}
