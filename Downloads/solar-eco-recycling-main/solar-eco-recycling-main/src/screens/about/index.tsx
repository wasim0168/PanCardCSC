import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Intro = dynamic(() => import("./intro"));
const OurMission = dynamic(() => import("./our-mission"));
const OurVision = dynamic(() => import("./our-vision"));
const CoreValues = dynamic(() => import("./core-values"));
const OurJourney = dynamic(() => import("./our-journey"));
const WhyChooseUs = dynamic(() => import("./why-choose-us"));

const AboutPage = () => {
  const pages = [
    Intro,
    OurMission,
    OurVision,
    CoreValues,
    OurJourney,
    WhyChooseUs,
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

export default AboutPage;
