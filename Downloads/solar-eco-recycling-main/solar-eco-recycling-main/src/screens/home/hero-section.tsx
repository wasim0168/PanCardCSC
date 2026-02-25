import { Button } from "@/components/ui/button";
import { ArrowRight, SquarePlay } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
// Variants for animations 
// Container variant for staggering child animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const bottomCards = [
    {
      imageSrc: "/home/sun.png",
      alt: "sun",
      label: "Solar Panels",
      bgColor: "#f49426",
    },
    {
      imageSrc: "/home/recycle.png",
      alt: "recycle",
      label: "Recycling",
      bgColor: "#7ce75b",
    },
    {
      imageSrc: "/home/plant.png",
      alt: "plant",
      label: "New Resources",
      bgColor: "#acc86c",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-[url('/home/solar-panels.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="bg-black/75 flex-1 flex flex-col justify-center px-4 sm:px-6 py-28">
        {/* Content */}
        <motion.div
          className="container mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-600/20 border border-green-500 mx-auto"
          >
            <Image
              src="/home/recycle.png"
              alt="Certified Solar Waste Management"
              width={14}
              height={14}
              className="sm:w-4 sm:h-4"
            />
            <span className="text-xs sm:text-sm font-semibold text-green-400">
              Certified Solar Waste Management
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-bold text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl"
          >
            Sustainable Solar
            <br />
            Recycling
            <br />
            for a <span className="text-green-400">Greener Tomorrow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl mx-auto"
          >
            Transforming end-of-life solar panels into valuable resources,
            reducing environmental impact and building a circular economy
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-3 sm:pt-4"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-green-600 hover:bg-green-700 h-12 sm:h-14 w-full sm:w-56 md:w-60 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>Know Recycling Process</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="border-white/30 text-white bg-white/10 h-12 sm:h-14 w-full sm:w-56 md:w-60 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <SquarePlay className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Watch How It Works</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Process Cards */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 bg-black/75 py-8 sm:py-10 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {bottomCards.map((cardItem, index) => (
          <motion.div key={cardItem.label} variants={card}>
            <div className="flex items-center gap-4">
              <div
                className="w-56 h-24 sm:w-60 sm:h-28 rounded-lg flex flex-col items-center justify-center gap-2 sm:gap-3"
                style={{ backgroundColor: cardItem.bgColor }}
              >
                <Image
                  src={cardItem.imageSrc}
                  alt={cardItem.alt}
                  width={24}
                  height={24}
                  className="sm:w-7 sm:h-7"
                />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  {cardItem.label}
                </span>
              </div>

              {index !== bottomCards.length - 1 && (
                <ArrowRight className="text-white hidden sm:block opacity-60" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
