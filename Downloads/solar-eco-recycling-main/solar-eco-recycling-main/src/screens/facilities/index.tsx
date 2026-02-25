import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroFacilities = dynamic(() => import("./hero-facilities"));
const SpecializedProcessing = dynamic(() => import("./specialized-processing"));
const PartnerCTA = dynamic(() => import("./partner-cta"));

const FacilitiesPage = () => {
  const pages = [HeroFacilities, SpecializedProcessing, PartnerCTA];
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

export default FacilitiesPage;
