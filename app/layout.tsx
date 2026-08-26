import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Nurhuda Rusardi — Intelligent Automation & AI Developer",
    template: "%s — Muhammad Nurhuda Rusardi",
  },
  description:
    "Portfolio of Muhammad Nurhuda Rusardi: Intelligent Automation Engineer, AI Developer, and QA Specialist building reliable systems that improve operational efficiency.",
  keywords: [
    "Intelligent Automation Engineer",
    "AI Developer",
    "QA Specialist",
    "RPA",
    "Agentic AI",
    "NestJS",
    "Gemini",
    "UiPath",
    "Power Automate",
  ],
  authors: [{ name: "Muhammad Nurhuda Rusardi" }],
  creator: "Muhammad Nurhuda Rusardi",
  openGraph: {
    title: "Muhammad Nurhuda Rusardi — Intelligent Automation & AI Developer",
    description: "Automation, AI workflows, and quality engineering for better operations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nurhuda Rusardi — Intelligent Automation & AI Developer",
    description: "Automation, AI workflows, and quality engineering for better operations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
