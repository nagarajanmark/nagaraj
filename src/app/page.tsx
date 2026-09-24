import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStackMarquee from "@/components/TechStackMarquee";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import QuoteSection from "@/components/QuoteSection";
import OrbitSection from "@/components/OrbitSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111111] selection:bg-[#1D4ED8] selection:text-[#FFFFFF]">
      <Header />
      <Hero />
      <TechStackMarquee />
      <Portfolio />
      <Services />
      <QuoteSection />
      <WhyChooseUs />
      <FAQ />
      <OrbitSection />
      <Contact />
      <Footer />
    </main>
  );
}
