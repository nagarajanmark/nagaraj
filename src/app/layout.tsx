import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { faqData } from "@/data/faq";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = "https://nagaraj.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nagarajan | Full Stack Developer | Frontend & Backend",
  description:
    "Nagarajan is a Full Stack Developer specializing in frontend and backend development with React.js, Next.js, Node.js and TypeScript, building scalable web applications and modern digital products.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Web Developer",
    "Full Stack JavaScript Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Backend Developer",
    "REST API Developer",
    "Backend API Development",
    "Database Development",
    "Web Application Backend Development",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Supabase",
    "Nagarajan",
    "Web Application Developer",
  ],
  authors: [{ name: "Nagarajan", url: siteUrl }],
  creator: "Nagarajan",
  publisher: "Nagarajan",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nagarajan | Full Stack Developer",
    description:
      "Frontend, backend and full-stack developer building modern web applications with React.js, Next.js, Node.js and TypeScript.",
    url: siteUrl,
    siteName: "Nagarajan — Full Stack Developer",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nagarajan — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagarajan | Full Stack Developer",
    description:
      "Frontend, backend and full-stack developer building modern web applications with React.js, Next.js, Node.js and TypeScript.",
    images: [`${siteUrl}/og-image.png`],
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://nagaraj.co.in/#person",
    name: "Nagarajan",
    url: "https://nagaraj.co.in/",
    jobTitle: "Full Stack Developer",
    image: "https://nagaraj.co.in/nagarajan-studio-portrait-hero-background.webp",
    description:
      "Nagarajan is a Full Stack Developer specializing in frontend and backend development with React.js, Next.js, Node.js and TypeScript, building scalable web applications and modern digital products.",
    email: "mailto:nagarajanmark0@gmail.com",
    knowsAbout: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Web Application Development",
      "Tailwind CSS",
      "GraphQL",
      "Docker",
    ],
    sameAs: [
      "https://www.linkedin.com/in/nagarajan369",
      "https://youtube.com/@hoverwanderman",
      "https://www.instagram.com/nagaraj_insights",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nagaraj.co.in/#website",
    name: "Nagarajan",
    url: "https://nagaraj.co.in/",
    description:
      "Nagarajan — Full Stack Developer specializing in Frontend, Backend and Web Application Development.",
    publisher: {
      "@id": "https://nagaraj.co.in/#person",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((project, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: project.link || "https://nagaraj.co.in/#work",
        author: {
          "@id": "https://nagaraj.co.in/#person",
        },
      },
    })),
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((service, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@id": "https://nagaraj.co.in/#person",
        },
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        {/* Microsoft Clarity Analytics */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yn3idnaeyo");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FFFFFF] text-[#111111] selection:bg-[#1D4ED8] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
