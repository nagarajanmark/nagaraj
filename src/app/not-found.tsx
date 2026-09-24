import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#111111] flex flex-col justify-between selection:bg-[#1D4ED8] selection:text-[#FFFFFF]">
      <Header />
      <section className="py-40 text-center flex flex-col items-center justify-center gap-6 px-6">
        <span className="text-sm font-mono uppercase tracking-widest text-[#1D4ED8] font-bold">
          404 ERROR
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-[#111111]/70 max-w-md">
          The page you are looking for does not exist or has been relocated to another address.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#091E42] via-[#0C2A66] to-[#1D4ED8] text-[#FFFFFF] px-7 py-3.5 rounded-full text-base font-bold hover:from-[#0C2A66] hover:to-[#2563EB] transition-colors shadow-md border border-[#111111]/10"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
