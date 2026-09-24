import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nagarajan — Senior Full Stack Web Developer & Software Engineer",
  description: "Nagarajan is a Senior Full Stack Web Developer specializing in Next.js, React, Node.js, TypeScript, PostgreSQL, and scalable cloud software architectures.",
  keywords: [
    "Nagarajan",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Backend Engineer",
    "TypeScript",
    "PostgreSQL",
    "Software Architect",
    "SaaS Engineer"
  ],
  authors: [{ name: "Nagarajan" }],
  creator: "Nagarajan",
  openGraph: {
    title: "Nagarajan — Senior Full Stack Web Developer",
    description: "Architecting scalable web applications, modern APIs, and high-performance full-stack digital systems.",
    url: "https://nagarajan.dev",
    siteName: "Nagarajan Portfolio",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Nagarajan Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagarajan — Senior Full Stack Web Developer",
    description: "Architecting scalable web applications, modern APIs, and high-performance full-stack digital systems.",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FFFFFF] text-[#111111] selection:bg-[#1D4ED8] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
