"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import TiltedImage from "@/components/TiltedImage";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import Button from "@/components/Button";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<SVGSVGElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  useHeroAnimation({
    container: containerRef,
    bg: bgRef,
    badge: badgeRef,
    title: titleRef,
    text: textRef,
    actions: actionsRef,
    image: imageWrapperRef,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#171717] flex flex-col items-center -mt-16 overflow-hidden max-sm:px-4"
    >
      {/* Background SVG */}
      <svg
        ref={bgRef}
        aria-hidden="true"
        className="absolute -z-10 w-full -mt-40 md:mt-0"
        width="1440"
        height="676"
        viewBox="0 0 1440 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-92"
          y="-948"
          width="1624"
          height="1624"
          rx="812"
          fill="url(#a)"
        />
        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 428 292)scale(812)"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </svg>

      {/* Badge */}
      <div
        ref={badgeRef}
        className="flex items-center mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2"
      >
        <div className="size-2.5 bg-green-500 rounded-full animate-pulse" />
        <span>Join our growing community</span>
      </div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-center text-2xl md:text-4xl font-semibold mt-4 max-w-xl leading-tight"
      >
        Build, grow, and scale your business — without doing it alone
      </h1>

      {/* Text */}
      <p
        ref={textRef}
        className="text-center text-sm md:text-base max-w-lg mt-2"
      >
        BendingWaters supports small business owners, creatives, and founders
        with the tools, guidance, and digital support needed to grow sustainably
        — from idea to income.
      </p>

      {/* Actions */}
      <div
        ref={actionsRef}
        className="flex items-center md:items-center max-sm:flex-col gap-4 mt-8"
      >
        <Button variant="outline" className="px-8 border-slate-400 text-white">
          Learn more
        </Button>
      </div>

      {/* Tilted image */}
      <div ref={imageWrapperRef} className="will-change-transform">
        <TiltedImage />
      </div>
    </section>
  );
}
