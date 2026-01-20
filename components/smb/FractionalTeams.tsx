"use client";

import Image from "next/image";
import { Users, FileText, Scaling, Calendar } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Dedicated creative team",
    description:
      "A skilled team of creatives ready to bring your ideas to life with consistency and expertise.",
    color: "text-pink-500",
  },
  {
    icon: FileText,
    title: "Project management support",
    description:
      "Get a project manager to manage execution and talent while you focus on growth.",
    color: "text-orange-500",
  },
  {
    icon: Scaling,
    title: "Flexible scaling",
    description:
      "Seamless project management, collaboration, and payments—all in one platform.",
    color: "text-yellow-500",
  },
  {
    icon: Calendar,
    title: "Monthly Subscription",
    description:
      "Flexible monthly plans with rollover credits for on-demand marketing and creative services.",
    color: "text-cyan-500",
  },
];

export default function FractionalTeams() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-9xl bg-slate-50 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="z-10">
            <div className="mb-8">
              <h3 className="text-slate-600 font-medium mb-4">
                <span className="font-bold text-slate-900">BENDINGwATERS</span>{" "}
                Fractional Teams
              </h3>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                Scale without{" "}
                <span className="font-serif italic text-bl">expensive</span>
                <br />
                <span className="font-serif italic text-np-orange">
                  full-time hires
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
              {features.map((feature, index) => (
                <div key={index}>
                  <feature.icon className={`w-6 h-6 mb-4 ${feature.color}`} />
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-np-orange text-white rounded-lg px-8 py-3 font-medium transition-colors">
              Read our content
            </button>
          </div>

          {/* Right Column: Floating Image */}
          <div className="relative h-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Decorative blurred blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-200/30 blur-3xl rounded-full" />

            <div className="relative w-1/2 h-full transform rotate-6 hover:rotate-0 transition-transform duration-700 ease-out">
              <Image
                src="/images/fractional_team_hero.png"
                alt="Creative team collaboration"
                fill
                className="object-cover rounded-[30px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
