import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Hyped - Social-first content agency",
  description:
    "Get Hyped is a social-first content agency. We create content that stands out, sticks with you, and brings results.",
  keywords: [
    "content agency",
    "social media",
    "marketing",
    "Netherlands",
    "Groenlo",
    "creative",
  ],
  authors: [{ name: "Get Hyped" }],
  creator: "Get Hyped",
  publisher: "Get Hyped",
  openGraph: {
    title: "Get Hyped - Social-first content agency",
    description:
      "We create content that stands out, sticks with you, and brings results.",
    type: "website",
    url: "https://gethyped.nl",
    siteName: "Get Hyped",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp",
        width: 500,
        height: 400,
        alt: "Get Hyped - Social-first content agency",
      },
    ],
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Hyped",
    description: "Social-first content agency",
    creator: "@gethyped.nl",
  },
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#ec4899",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://gethyped.nl" />
        <meta name="theme-color" content="#faf4ec" />
      </head>
      <body className="antialiased bg-[#faf4ec]!">{children}</body>
    </html>
  );
}
