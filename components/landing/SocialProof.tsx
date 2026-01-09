import React from "react";

export default function SocialProof() {
  const awards = [
    {
      logo: "AdAge",
      title: "Best Workplace",
    },
    {
      logo: "PMW",
      title: "Agency of the Year",
    },
    {
      logo: "Google",
      title: "Premier Partner",
    },
    {
      logo: "campaign",
      title: "Global Agency of the Year",
    },
    {
      logo: "Inc.",
      title: "Best Place to Work",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#3a1d1d] text-white">
      <div className="container-custom px-8">
        {/* Top Text */}
        <h2 className="text-center text-lg md:text-xl font-semibold mb-12 max-w-4xl mx-auto leading-relaxed">
          We are a brand focus on building communities of business owners that
          contribute to the economic and social growth of Africa and the world
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300 rounded-sm h-40"
            >
              {/* Placeholder for Logo */}
              <div className="text-2xl font-bold mb-3">{award.logo}</div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                {award.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-sm">
          We have a growing community of 1000+ business owners
        </p>
      </div>
    </section>
  );
}
