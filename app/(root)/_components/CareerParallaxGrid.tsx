import Image from "next/image";
import type { RefObject } from "react";

interface CareersParallaxGridProps {
  gridRef: RefObject<HTMLDivElement | null>;
}

const TEAM_IMAGES = [
  "/images/career-1.png",
  "/images/career-2.png",
  "/images/career-3.png",
  "/images/career-4.png",
  "/images/career-5.png",
  "/images/career-6.png",
  "/images/career-7.png",
  "/images/career-8.png",
];

const CareersParallaxGrid = ({ gridRef }: CareersParallaxGridProps) => {
  return (
    /*
     * scale-110 ensures no white edges appear during parallax y-movement.
     * opacity-30 lets brand colours dominate over images.
     */
    <div
      ref={gridRef}
      className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0 opacity-30 pointer-events-none scale-110"
    >
      {TEAM_IMAGES.map((src, index) => (
        <div
          key={index}
          className="relative w-full h-full min-h-[200px] md:min-h-[320px]"
        >
          <Image
            src={src}
            alt={`Bending Waters team — ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover grayscale"
            priority={index < 4}
          />
        </div>
      ))}
    </div>
  );
};

export default CareersParallaxGrid;
