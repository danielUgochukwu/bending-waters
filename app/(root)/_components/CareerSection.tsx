"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CareersParallaxGrid from "./CareerParallaxGrid";
import CareersContent from "./CareersContent";

gsap.registerPlugin(ScrollTrigger);

const CareersSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax: grid scrolls slower than page
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(gridRef.current, { y: "-10%" }, { y: "10%", ease: "none" });

      // Staggered content reveal on scroll enter
      const children = contentRef.current?.querySelectorAll("[data-reveal]");
      if (children) {
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-zinc-950"
    >
      {/* Parallax image grid — sits behind everything */}
      <CareersParallaxGrid gridRef={gridRef} />

      {/* Compound overlay: vertical darkness + horizontal vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/55 to-zinc-950/85 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/75 via-transparent to-zinc-950/75 z-10 pointer-events-none" />

      {/* Main content layer */}
      <div ref={contentRef} className="relative z-20 flex-1 flex flex-col">
        <CareersContent />
      </div>

    </section>
  );
};

export default CareersSection;
