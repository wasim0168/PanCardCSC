"use client";

import { CapabilitySection } from "./capability-section";
import { SpecializedFacilities } from "./specialized-features";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SpecializedFacilities />
      <CapabilitySection />
    </main>
  );
}
