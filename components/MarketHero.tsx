"use client";

import Link from "next/link";
import { useRef } from "react";
import TiltedImage from "@/components/TiltedImage";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import Button from "@/components/Button";

type MarketHeroProps = {
  badgeText: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  theme?: "warm" | "bold" | "premium";
};

export default function MarketHero({
  badgeText,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
  ctaText = "Learn more",
  ctaLink = "/contact",
}: MarketHeroProps) {
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
      aria-labelledby="market-hero-title"
      className="relative -mt-16 flex min-h-screen flex-col items-center overflow-hidden bg-[#171717] px-4 text-white"
    >
      <svg
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 w-full"
        viewBox="0 0 1440 676"
        fill="none"
      >
        <rect
          x="-92"
          y="-948"
          width="1624"
          height="1624"
          rx="812"
          fill="url(#hero-gradient)"
        />
        <defs>
          <radialGradient
            id="hero-gradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </svg>

      <div
        ref={badgeRef}
        className="mt-40 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur md:mt-48"
      >
        <span
          className="size-2.5 rounded-full animate-pulse bg-green-500"
          aria-hidden="true"
        />
        <span>{badgeText}</span>
      </div>

      <p className="mt-5 text-sm font-medium uppercase tracking-[0.3em] text-np-orange">
        {eyebrow}
      </p>

      <h1
        id="market-hero-title"
        ref={titleRef}
        className="mt-4 max-w-4xl text-center text-3xl font-semibold leading-tight md:text-6xl"
      >
        {title}
      </h1>

      <p
        ref={textRef}
        className="mt-5 max-w-2xl text-center text-base leading-7 text-gray-300 md:text-lg"
      >
        {description}
      </p>

      <div
        ref={actionsRef}
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Button
          
          variant="outline"
          className="border-white/30 px-8 text-white"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>

      {imageSrc ? (
        <div ref={imageWrapperRef} className="mt-12 will-change-transform">
          <TiltedImage imageSrc={imageSrc} altText={imageAlt} />
        </div>
      ) : null}
    </section>
  );
}
