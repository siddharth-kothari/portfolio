import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    index: process.env.NODE_ENV === 'production' ? true : false, // Allow indexing by all bots
    follow: process.env.NODE_ENV === 'production' ? true : false, // Allow following links
    nocache: process.env.NODE_ENV === 'production' ? false : false,
    googleBot: {
      index: process.env.NODE_ENV === 'production' ? true : false,
      follow: process.env.NODE_ENV === 'production' ? true : false,
      noimageindex: process.env.NODE_ENV === 'production' ? true : false,
    },
  },
  
};

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}
