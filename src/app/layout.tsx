import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Portfolio of Ransya Maulana — software development and creative work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ransya Maulana — Portfolio",
    template: "%s — Ransya Maulana",
  },
  description,
  applicationName: "Ransya Maulana Portfolio",
  authors: [{ name: "Ransya Maulana" }],
  creator: "Ransya Maulana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ransya Maulana",
    title: "Ransya Maulana — Portfolio",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ransya Maulana — Portfolio",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f8f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
