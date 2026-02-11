"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import GlobalSupportSection from "@/components/GlobalSupportSection";
import AnnualRecapSection from "@/components/AnnualRecapSection";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
        .from(
          ".hero-line",
          {
            width: 0,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".hero-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-hero-bg.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4  flex flex-col justify-center h-full">
          <div className="max-w-5xl flex flex-col items-start text-left mt-0 md:mt-0 lg:mt-20">
            <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Built for clarity.
              <br />
              Designed for growth.
            </h1>
            <div className="hero-line w-24 h-1.5 bg-[#FF5722] mt-6 mb-8 rounded-full" />

            <div className="text-base md:text-xl text-gray-200 mb-10 max-w-3xl leading-relaxed space-y-6">
              <p className="hero-desc">
                BendingWaters helps African founders and small business owners
                who have built something real, but struggle to turn attention
                into consistent revenue.
              </p>
              <p className="hero-desc">
                We help you achieve predictability based on set systems
                that&apos;ll help scale your business.
              </p>
              <p className="hero-desc">
                BendingWaters works with you to define who you’re for, what
                problem you solve, and why customers should choose you, then
                turn that clarity into marketing systems that drive trust,
                engagement, and growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href="/contact"
                className="hero-btn w-full sm:w-auto text-center bg-[#FF5722] hover:bg-[#F4511E] text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/careers"
                className="hero-btn w-full sm:w-auto text-center text-white border border-white/30 hover:border-[#FF5722] hover:text-[#FF5722] py-3 px-8 rounded-full font-medium transition-all duration-300"
              >
                Join the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
      <ValuesSection />
      <GlobalSupportSection />
      <AnnualRecapSection />
      <Footer />
    </main>
  );
}
