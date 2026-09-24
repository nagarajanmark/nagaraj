"use client";

import dynamic from "next/dynamic";

const OrbitDeliveryHero = dynamic(
  () => import("@/components/ui/orbit-delivery-hero"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[760px] flex items-center justify-center bg-[#f6f9ff] text-[#4a72e7]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-sm font-medium">Loading 3D Experience...</p>
        </div>
      </div>
    ),
  }
);

export default function OrbitSection() {
  return (
    <section id="3d-experience" className="w-full overflow-hidden relative">
      <OrbitDeliveryHero theme="light" />
    </section>
  );
}
