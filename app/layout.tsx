import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MacShell } from "@/components/os/MacShell";
import { ThemeScript } from "@/components/os/ThemeScript";
import { JsonLd } from "@/lib/json-ld";
import { MAINTENANCE_HEADER, isMaintenanceEnabled } from "@/lib/maintenance";
import { getSiteUrl, isProduction, site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

const url = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.name} — ${site.shortHeadline}`,
    template: `%s`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: `${site.name} — ${site.shortHeadline}`,
    description: site.description,
    url,
    images: [{ url: "/logo.webp", alt: site.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.shortHeadline}`,
    description: site.description,
    images: ["/logo.webp"],
  },
  alternates: { canonical: url },
  robots: {
    index: isProduction(),
    follow: isProduction(),
    googleBot: {
      index: isProduction(),
      follow: isProduction(),
    },
  },
  icons: { icon: "/logo.webp" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maintenance =
    isMaintenanceEnabled() && (await headers()).get(MAINTENANCE_HEADER) === "1";

  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
        {!maintenance && <JsonLd />}
      </head>
      <body>
        {maintenance ? children : <MacShell>{children}</MacShell>}
      </body>
      {isProduction() && !maintenance && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-CR8XJ5DFPX"} />
      )}
    </html>
  );
}
