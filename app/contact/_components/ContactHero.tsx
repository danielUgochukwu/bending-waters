"use client";

// File: components/contact/ContactHeroSection.tsx

import Link from "next/link";

const services = [
  "Performance Marketing",
  "Content & Brand Strategy",
  "Organic Growth & GEO",
  "Data & AI Analytics",
  "Consulting & Strategy",
  "Technology Buildouts",
];

export default function ContactHero() {
  return (
    <div className="sticky top-28 flex flex-col gap-10">
      {/* Eyebrow label */}
      <p className="text-xs font-semibold tracking-[0.2em] text-np-orange uppercase">
        Let&apos;s Work Together
      </p>

      {/* Headline */}
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#0F0F0F]">
          Success is a <br />
          <span className="italic font-light text-np-orange">team effort.</span>
        </h1>
        <p className="text-base text-gray-700 leading-relaxed max-w-xs">
          Tell us about your business and where you want to go. We&apos;ll help
          you get there with purpose.
        </p>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
          Reach us directly
        </p>
        <Link
          href="mailto:outreach@bendingwaters.africa"
          className="text-sm font-medium text-[#0F0F0F] hover:text-np-orange transition-colors duration-200 underline underline-offset-4 decoration-gray-200 hover:decoration-np-orange"
        >
          outreach@bendingwaters.africa
        </Link>
      </div>

      {/* Services we offer */}
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
          What we do
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:border-np-orange hover:text-np-orange transition-colors duration-200 cursor-default"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative zebra stripe accent */}
      <div className="flex items-center gap-1.5 pt-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`h-5 rounded-full ${
              i % 2 === 0 ? "w-1 bg-[#0F0F0F]" : "w-1 bg-np-orange"
            }`}
          />
        ))}
        <span className="ml-2 text-xs text-gray-500 font-medium">
          Raising zebras, not unicorns.
        </span>
      </div>
    </div>
  );
}
