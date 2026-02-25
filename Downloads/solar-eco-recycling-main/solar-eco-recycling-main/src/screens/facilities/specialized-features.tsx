"use client";

import Image from "next/image";

type StatColor = "green" | "orange" | "blue";

const colorMap: Record<StatColor, string> = {
  green: "bg-green-50",
  orange: "bg-orange-50",
  blue: "bg-blue-50",
};

const textColorMap: Record<StatColor, string> = {
  green: "text-green-700",
  orange: "text-orange-700",
  blue: "text-blue-700",
};

export function SpecializedFacilities() {
  const data = {
    title: "Specialized Processing Facilities",
    description:
      "Each facility is optimized for specific recycling processes to ensure maximum efficiency, safety, and material recovery in compliance with environmental regulation",
    cards: [
      {
        title: "Solar Panel Recycling",
        subtitle: "Complete End-of-Life Processing",
        image: "/facilities/panel.png",
        description:
          "Comprehensive recovery of valuable materials from end-of-life solar panels with zero environmental impact.",
        highlights: [
          "Complete solar panel collection and safe dismantling",
          "Separation of glass, aluminum frames, and silicon cells",
          "Eco-friendly processing with zero landfill commitment",
          "Pollution-controlled handling of all material",
          "Material purity certification for reuse",
        ],
        stats: [
          {
            label: "Processing Capacity",
            value: "20,000 panels/month",
            color: "green" as StatColor,
          },
          {
            label: "Recovery Rate",
            value: "95-98%",
            color: "green" as StatColor,
          },
        ],
      },
      {
        title: "Solar Cell Processing",
        subtitle: "Advanced Material Recovery",
        image: "/facilities/panel.png",
        description:
          "Advanced thermal processing for high-purity silicon recovery and material extraction from solar cells.",
        highlights: [
          "Solar cell separation using advanced thermal processes",
          "High-purity silicon recovery and purification",
          "Controlled processing with minimal chemical usage",
          "Circular economy focused workflow integration",
          "Silicon ready for manufacturing reuse",
        ],
        stats: [
          {
            label: "Silicon Purity",
            value: "92-95%",
            color: "orange" as StatColor,
          },
          {
            label: "Processing Rate",
            value: "5 tons/day",
            color: "orange" as StatColor,
          },
        ],
      },
      {
        title: "E-Waste Components",
        subtitle: "Electronic Waste Processing",
        image: "/facilities/panel.png",
        description:
          "Specialized processing of electronic components with precision material separation and hazardous waste management.",
        highlights: [
          "PCB recycling and recovery",
          "Motherboard processing and component separation",
          "Precious metal recovery (gold, silver, copper)",
          "Safe handling of hazardous materials",
          "Data destruction and security protocols",
        ],
        stats: [
          {
            label: "Metal Recovery",
            value: "99.5% efficiency",
            color: "blue" as StatColor,
          },
          {
            label: "Processing Capacity",
            value: "100 tons/month",
            color: "blue" as StatColor,
          },
        ],
      },
    ],
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.cards.map((card) => (
            <div
              key={card.title}
              className="
                bg-white 
                rounded-2xl 
                overflow-hidden 
                border 
                border-gray-200 
                shadow-sm 
                hover:shadow-xl 
                hover:-translate-y-1 
                transition-all 
                duration-300 
                flex flex-col
              "
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.subtitle}</p>
              </div>

              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-gray-700 mb-6">{card.description}</p>

                {/* Highlights */}
                <ul className="space-y-3 mb-8 flex-1">
                  {card.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-gray-400" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  {card.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex justify-between items-center p-3 rounded-lg ${colorMap[stat.color]}`}
                    >
                      <span className="text-gray-700 text-sm font-medium">
                        {stat.label}
                      </span>
                      <span
                        className={`text-sm font-bold ${textColorMap[stat.color]}`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
