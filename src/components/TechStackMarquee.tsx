"use client";

import Image from "next/image";

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

const row1Techs: TechItem[] = [
  { name: "React.js", category: "Frontend UI Library", icon: "/tectstack/React.svg" },
  { name: "Next.js", category: "Full-Stack Framework", icon: "/tectstack/Next.js.svg" },
  { name: "TypeScript", category: "Type-Safe Frontend & Backend", icon: "/tectstack/TypeScript.svg" },
  { name: "JavaScript", category: "Core Web Language", icon: "/tectstack/JavaScript.svg" },
  { name: "HTML5", category: "Semantic Markup", icon: "/tectstack/HTML5.svg" },
  { name: "CSS3", category: "Modern Styling & Layouts", icon: "/tectstack/CSS3.svg" },
  { name: "Tailwind CSS", category: "Utility-First CSS Framework", icon: "/tectstack/Tailwind-CSS.svg" },
  { name: "Three.js", category: "3D & Interactive Graphics", icon: "/tectstack/Three.js.svg" },
  { name: "Figma", category: "UI/UX & Design Systems", icon: "/tectstack/Figma.svg" },
];

const row2Techs: TechItem[] = [
  { name: "Node.js", category: "Backend Runtime Environment", icon: "/tectstack/Node.js.svg" },
  { name: "Express.js", category: "Backend REST API Framework", icon: "/tectstack/Express.svg" },
  { name: "GraphQL", category: "API Query & Schema Language", icon: "/tectstack/GraphQL.svg" },
  { name: "PostgreSQL", category: "Relational Database", icon: "/tectstack/PostgresSQL.svg" },
  { name: "MongoDB", category: "Document NoSQL Database", icon: "/tectstack/MongoDB.svg" },
  { name: "MySQL", category: "Relational SQL Database", icon: "/tectstack/MySQL.svg" },
  { name: "Redis", category: "In-Memory Cache & Pub/Sub", icon: "/tectstack/Redis.svg" },
  { name: "Docker", category: "Containerization & DevOps", icon: "/tectstack/Docker.svg" },
  { name: "AWS", category: "Cloud Infrastructure", icon: "/tectstack/AWS.svg" },
  { name: "Vercel", category: "Frontend & Serverless Edge", icon: "/tectstack/Vercel.svg" },
  { name: "Git", category: "Version Control", icon: "/tectstack/Git.svg" },
  { name: "GitHub Actions", category: "Automated CI/CD Pipelines", icon: "/tectstack/GitHub-Actions.svg" },
];

export default function TechStackMarquee() {
  return (
    <section id="techstack" className="py-20 md:py-28 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-[#111111]/10 select-none">
      {/* Background ambient decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#111111]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              Full Stack Technologies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Frontend &amp; Backend Tech Stack
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#111111]/70 leading-relaxed font-normal">
            A production-proven technology stack spanning React.js and Next.js frontend interfaces, Node.js backend APIs, relational and NoSQL databases, and cloud DevOps.
          </p>
        </div>
      </div>

      {/* Marquee Containers with side gradients */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Frontend & UI Technologies (Moves Left) */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap items-center py-2">
            {[...row1Techs, ...row1Techs, ...row1Techs].map((tech, idx) => (
              <div
                key={`row1-${tech.name}-${idx}`}
                className="group flex items-center gap-4 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#1D4ED8] hover:shadow-[0_8px_24px_rgba(29,78,216,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-default min-w-[200px] sm:min-w-[240px]"
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 p-1.5 rounded-xl bg-[#F8FAFC] border border-[#111111]/5 group-hover:scale-110 group-hover:border-[#1D4ED8]/30 transition-transform duration-300">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} Full Stack Web Development`}
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors leading-tight">
                    {tech.name}
                  </span>
                  <span className="text-xs text-[#111111]/60 font-medium tracking-wide">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Backend, Databases & DevOps (Moves Right) */}
        <div className="flex overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-marquee-reverse whitespace-nowrap items-center py-2">
            {[...row2Techs, ...row2Techs, ...row2Techs].map((tech, idx) => (
              <div
                key={`row2-${tech.name}-${idx}`}
                className="group flex items-center gap-4 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl bg-[#FFFFFF] border border-[#111111]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#1D4ED8] hover:shadow-[0_8px_24px_rgba(29,78,216,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-default min-w-[200px] sm:min-w-[240px]"
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 p-1.5 rounded-xl bg-[#F8FAFC] border border-[#111111]/5 group-hover:scale-110 group-hover:border-[#1D4ED8]/30 transition-transform duration-300">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} Backend & Database Development`}
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors leading-tight">
                    {tech.name}
                  </span>
                  <span className="text-xs text-[#111111]/60 font-medium tracking-wide">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
