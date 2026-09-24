"use client";

import Image from "next/image";

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

const row1Techs: TechItem[] = [
  { name: "React", category: "Frontend Library", icon: "/tectstack/React.svg" },
  { name: "Next.js", category: "Full-Stack Framework", icon: "/tectstack/Next.js.svg" },
  { name: "TypeScript", category: "Type-Safe JS", icon: "/tectstack/TypeScript.svg" },
  { name: "JavaScript", category: "Core Language", icon: "/tectstack/JavaScript.svg" },
  { name: "HTML5", category: "Markup Standard", icon: "/tectstack/HTML5.svg" },
  { name: "CSS3", category: "Modern Styling", icon: "/tectstack/CSS3.svg" },
  { name: "Tailwind CSS", category: "Utility-First CSS", icon: "/tectstack/Tailwind-CSS.svg" },
  { name: "Sass", category: "CSS Preprocessor", icon: "/tectstack/Sass.svg" },
  { name: "Bootstrap", category: "UI Framework", icon: "/tectstack/Bootstrap.svg" },
  { name: "React Bootstrap", category: "React UI Components", icon: "/tectstack/React-Bootstrap.svg" },
  { name: "Material UI", category: "Component System", icon: "/tectstack/Material-UI.svg" },
  { name: "AngularJS", category: "Frontend Framework", icon: "/tectstack/AngularJS.svg" },
];

const row2Techs: TechItem[] = [
  { name: "Node.js", category: "Runtime Environment", icon: "/tectstack/Node.js.svg" },
  { name: "Python", category: "Backend & Scripting", icon: "/tectstack/Python.svg" },
  { name: "Django", category: "Python Web Framework", icon: "/tectstack/Django.svg" },
  { name: "PHP", category: "Server-Side Scripting", icon: "/tectstack/PHP.svg" },
  { name: "MongoDB", category: "NoSQL Database", icon: "/tectstack/MongoDB.svg" },
  { name: "MySQL", category: "Relational Database", icon: "/tectstack/MySQL.svg" },
  { name: "Three.js", category: "3D Graphics & WebGL", icon: "/tectstack/Three.js.svg" },
  { name: "Flutter", category: "Cross-Platform Mobile", icon: "/tectstack/Flutter.svg" },
  { name: "Kotlin", category: "Native Android & JVM", icon: "/tectstack/Kotlin.svg" },
  { name: "Figma", category: "UI/UX & Prototyping", icon: "/tectstack/Figma.svg" },
  { name: "Git", category: "Version Control", icon: "/tectstack/Git.svg" },
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
              Technologies &amp; Frameworks
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Tech Stack &amp; Skills I Know
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#111111]/70 leading-relaxed font-normal">
            A battle-tested arsenal of modern programming languages, frontend libraries, backend frameworks, databases, and design tools I work with daily.
          </p>
        </div>
      </div>

      {/* Marquee Containers with side gradients */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moves Left */}
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
                    alt={`${tech.name} logo`}
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

        {/* Row 2: Moves Right */}
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
                    alt={`${tech.name} logo`}
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
