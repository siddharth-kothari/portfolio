import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Provider from "@/lib/Provider";

const isProduction = process.env.NEXT_ENV === 'production';

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
