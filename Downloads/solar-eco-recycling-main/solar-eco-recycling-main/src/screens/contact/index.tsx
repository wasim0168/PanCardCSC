import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ContactHero = dynamic(() => import("./contact-hero"));
const ContactSection = dynamic(() => import("./contact-section"));
const WhyChooseSolarRecycle = dynamic(
  () => import("./why-choose-solar-recycle"),
);

const ContactPage = () => {
  const pages = [ContactHero, ContactSection, WhyChooseSolarRecycle];
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

export default ContactPage;
