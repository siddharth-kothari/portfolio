import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Provider from "@/lib/Provider";
import Clarity from '@microsoft/clarity';
import { Poppins } from "next/font/google";

const isProduction = process.env.NEXT_ENV === 'production';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // optional but recommended
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_URL || 'http://localhost:3000'),
  title: process.env.NEXT_SITE_TITLE,
  description: process.env.NEXT_SITE_DESCRIPTION,
  keywords: process.env.NEXT_SITE_KEYWORDS,
  authors: [{ name: "Siddharth Kothari", url: "https://github.com/siddharth-kothari" }],
  openGraph: {
    title: process.env.NEXT_SITE_TITLE,
    description: process.env.NEXT_SITE_DESCRIPTION,
    url: process.env.NEXT_URL,
    images: [
      {
        url: '/logo.png', // Must be an absolute URL
        alt: process.env.NEXT_SITE_TITLE,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_SITE_TITLE,
    description: process.env.NEXT_SITE_DESCRIPTION,
    images: ['/logo.png'], // Must be an absolute URL
  },
  alternates: {
    canonical: process.env.NEXT_URL,
  },
  robots: {
    index: isProduction, // Allow indexing in production
    follow: isProduction, // Allow following links in production
    nocache: isProduction, // Cache only in production
    googleBot: {
      index: isProduction,
      follow: isProduction,
      noimageindex: !isProduction, // Prevent image indexing in non-production environments
    },
  },
  
};
 
export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const projectId = "plistqra3p";

Clarity.init(projectId);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <GoogleTagManager gtmId="GTM-T3DF4J2X" />
      <GoogleAnalytics gaId="G-CR8XJ5DFPX" />
      <body className="font-poppins">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
