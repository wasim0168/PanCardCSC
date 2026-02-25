"use client";

import { CheckCircle2 } from "lucide-react";
import { Bot, Droplets, TrendingUp, Shield } from "lucide-react";

export function CapabilitySection() {
  const advancedProcessingData = {
    title: "Advanced Processing Capabilities",
    description:
      "Our facilities integrate cutting-edge technology with sustainable practices to deliver maximum material recovery while minimizing environmental impact.",
    checklistItems: [
      "AI-powered sorting systems for precise material identification",
      "Closed-loop water system reducing consumption by 85%",
      "Real-time emissions monitoring and control",
      "Automated material handling for worker safety",
      "Blockchain-based material tracking for full transparency",
    ],
    features: [
      {
        icon: <Bot className="w-12 h-12 text-blue-600" />,
        title: "Automated Sorting",
        description: "AI and robotics for efficient material separation",
      },
      {
        icon: <Droplets className="w-12 h-12 text-green-600" />,
        title: "Water Recycling",
        description: "Closed-loop system minimizing water usage",
      },
      {
        icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
        title: "Real-time Monitoring",
        description: "Continuous environmental and process tracking",
      },
      {
        icon: <Shield className="w-12 h-12 text-blue-600" />,
        title: "Safety Systems",
        description: "Advanced protection for workers and environment",
      },
    ],
  };
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {advancedProcessingData.title}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {advancedProcessingData.description}
            </p>
            <div className="space-y-4">
              {advancedProcessingData.checklistItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Feature Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {advancedProcessingData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
