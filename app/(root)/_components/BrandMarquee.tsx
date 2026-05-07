"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ProductCardData } from "../_contstants";
import BrandCard from "./BrandCard";

type Props = {
  items: ProductCardData[];
  speed?: number;
};

const getArcStyle = (index: number) => {
  const arc = [
    "translate-y-[90px] -rotate-[14deg] scale-[1.12]",
    "translate-y-[45px] -rotate-[8deg] scale-[1.04]",
    "translate-y-[15px] -rotate-[3deg]",
    "translate-y-[8px] rotate-[2deg]",
    "translate-y-[35px] rotate-[7deg] scale-[1.04]",
    "translate-y-[85px] rotate-[13deg] scale-[1.12]",
  ];

  return arc[index % arc.length];
};

const BrandMarquee = ({ items, speed = 28 }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // triple duplicate = smoother loop
  const loopItems = useMemo(() => [...items, ...items, ...items], [items]);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) return;

      const distance = track.scrollWidth / 3;

      const tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -distance,
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      );

      return () => tween.kill();
    },
    { scope: containerRef, dependencies: [items.length, speed] }
  );

  if (!items.length) {
    return (
      <div className="mt-12 flex min-h-[280px] items-center justify-center text-white/50">
        No brands available
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative mt-10 w-full overflow-hidden pt-6 pb-32"
    >
      {/* gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        ref={trackRef}
        className="flex w-max items-start gap-5 will-change-transform"
      >
        {loopItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`shrink-0 transform-gpu ${getArcStyle(index)}`}
            aria-hidden={index >= items.length}
          >
            <BrandCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
