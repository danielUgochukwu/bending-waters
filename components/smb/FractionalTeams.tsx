"use client";

import Image from "next/image";
import { Palette, Megaphone, Globe, Camera } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Branding & Creative",
    description:
      "Logos, visuals, content, and brand identity that help your business stand out.",
    color: "text-pink-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Social media, ads, and growth strategies designed for small businesses.",
    color: "text-orange-500",
  },
  {
    icon: Globe,
    title: "Websites & Online Stores",
    description: "Simple, conversion-focused websites and ecommerce setups.",
    color: "text-yellow-500",
  },
  {
    icon: Camera,
    title: "Content & Storytelling",
    description:
      "Photography, video, and copy that tell your brand story clearly.",
    color: "text-cyan-500",
  },
];

export default function FractionalTeams() {
  return (
    <section className="py-4 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-9xl bg-slate-50 rounded-[40px] p-8  overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="z-10">
            <div className="mb-8">
              <h3 className="text-slate-600 font-medium mb-4">
                <span className="font-bold text-slate-900">BendingWaters</span>{" "}
                helps you focus on growing
              </h3>
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                Built for business owners building real businesses.
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
              Explore support options
            </button>
          </div>

          {/* Right Column: Floating Image */}
          <div className="relative flex items-center justify-center">
            {/* Decorative blurred blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200/30 blur-3xl rounded-full" />

            <div className="relative w-[300px] h-[400px] md:w-[500px] md:w-[800px] ">
              <Image
                src="/images/hair_vendors.jpg"
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
