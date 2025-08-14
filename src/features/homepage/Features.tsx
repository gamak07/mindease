import React from "react";
import { FaComments, FaChartLine, FaLightbulb } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaComments />,
    title: "AI Chat Support",
    description:
      "Get instant, empathetic responses and coping strategies whenever you need them.",
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: "Mood Tracking",
    description:
      "Monitor your emotional patterns and identify trends to better understand yourself.",
  },
  {
    id: 3,
    icon: <FaLightbulb />,
    title: "Wellness Tips",
    description:
      "Receive personalized recommendations for stress management and self-care.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-3xl font-bold text-gray-900">
            How MindEase Supports You
          </h3>
          <p className="text-lg text-gray-600">
            Simple tools for better mental wellness
          </p>
        </div>

          {/* features */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3">
            {features.map((feature) => (
              <div className="p-6 text-center" key={feature.id}>
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${feature.id === 1 ? "bg-indigo-100" : feature.id === 2 ? "bg-green-100" : "bg-purple-100"}`}
                >
                  <span
                    className={`text-2xl ${feature.id === 1 ? "text-indigo-600" : feature.id === 2 ? "text-green-600" : "text-purple-600"}`}
                  >
                    {feature.icon}
                  </span>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
