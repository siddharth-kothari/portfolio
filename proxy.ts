import { NextResponse, type NextRequest } from "next/server";
import {
  MAINTENANCE_COOKIE,
  MAINTENANCE_HEADER,
  MAINTENANCE_QUERY,
  clientIp,
  getAllowedIps,
  getBypassSecret,
  isMaintenanceEnabled,
  isStaticPath,
  secretsMatch,
} from "@/lib/maintenance";

function withMaintenanceHeader(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(MAINTENANCE_HEADER, "1");
  return headers;
}

function bypassed(request: NextRequest) {
  const secret = getBypassSecret();
  const cookie = request.cookies.get(MAINTENANCE_COOKIE)?.value ?? "";
  const query = request.nextUrl.searchParams.get(MAINTENANCE_QUERY) ?? "";
  if (secretsMatch(cookie, secret) || secretsMatch(query, secret)) return true;
  const ip = clientIp(request.headers);
  return Boolean(ip) && getAllowedIps().includes(ip);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isMaintenanceEnabled()) {
    if (pathname === "/maintenance") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (isStaticPath(pathname)) {
    return NextResponse.next();
  }

  const secret = getBypassSecret();
  const querySecret = request.nextUrl.searchParams.get(MAINTENANCE_QUERY) ?? "";
  if (secret && secretsMatch(querySecret, secret)) {
    const url = request.nextUrl.clone();
    url.searchParams.delete(MAINTENANCE_QUERY);
    const response = NextResponse.redirect(url);
    response.cookies.set(MAINTENANCE_COOKIE, secret, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  }

  if (bypassed(request)) {
    if (pathname === "/maintenance") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  const headers = withMaintenanceHeader(request);
  const response =
    pathname === "/maintenance"
      ? NextResponse.next({ request: { headers } })
      : NextResponse.rewrite(new URL("/maintenance", request.url), {
          request: { headers },
        });
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
