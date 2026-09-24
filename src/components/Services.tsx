"use client";

import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function Services() {
  return (
    <section className="relative border-t border-[#111111]/10 bg-[#FFFFFF] overflow-hidden" id="services">
      {/* Cinematic Scroll-Driven Hero for Services */}
      <div className="w-full overflow-hidden">
        <CinematicHero
          brandName="SERVICES"
          tagline1="Full-Stack solutions that"
          tagline2="turn vision into software."
          cardHeading="Full-Stack Engineering Excellence"
          cardDescription={
            <>
              Delivering end-to-end full-stack web applications, scalable cloud microservices, reactive UI/UX, and robust database architectures tailored for high-growth businesses.
            </>
          }
          metricValue={99}
          metricLabel="% Performance Score"
          ctaHeading="Ready to engineer your next product?"
          ctaDescription="Explore our complete range of specialized development services, technical proficiencies, and enterprise solutions."
        />
      </div>
    </section>
  );
}
