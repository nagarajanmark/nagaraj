"use client";

import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function Services() {
  return (
    <section className="relative border-t border-[#111111]/10 bg-[#FFFFFF] overflow-hidden" id="services">
      {/* Cinematic Scroll-Driven Hero for Services */}
      <div className="w-full overflow-hidden">
        <CinematicHero
          brandName="SERVICES"
          tagline1="Frontend & Backend Engineering"
          tagline2="Scalable Full-Stack Solutions."
          cardHeading="Full Stack Engineering Services"
          cardDescription={
            <>
              Delivering end-to-end full-stack web applications, scalable Node.js backend APIs, reactive React and Next.js user interfaces, and robust database architectures.
            </>
          }
          metricValue={99}
          metricLabel="% Performance Score"
          ctaHeading="Ready to engineer your next web application?"
          ctaDescription="Explore specialized frontend, backend, and full-stack engineering services tailored for high performance and scalability."
        />
      </div>
    </section>
  );
}
