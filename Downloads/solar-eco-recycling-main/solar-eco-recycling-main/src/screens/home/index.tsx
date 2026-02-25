"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(() => import("./hero-section"));
const ImpactAndTrust = dynamic(() => import("./impact&trust"));
const RecyclingProcess = dynamic(() => import("./recycling-process"));
const EnvironmentAwareness = dynamic(() => import("./environment-awareness"));
const OurServices = dynamic(() => import("./our-services"));
const ComplianceCertifications = dynamic(
  () => import("./compliance-verification"),
);
const GetInTouch = dynamic(() => import("./get-in-touch"));

const Loading = dynamic(() => import("@/app/loading"));

const HomePage = () => {
  const pages = [
    HeroSection,
    ImpactAndTrust,
    RecyclingProcess,
    EnvironmentAwareness,
    OurServices,
    ComplianceCertifications,
    GetInTouch,
  ];
  return (
    <>
      {pages.map((Page, index) => (
        <Suspense key={index} fallback={<Loading />}>
          <Page />
        </Suspense>
      ))}
    </>
  );
};

export default HomePage;
