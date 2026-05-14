"use client";

import { useMemo, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const VIDEOS = [
  "/videos/helping-builders.mp4",
  "/videos/helping-builders-2.mp4",
  "/videos/helping-builders-3.mp4",
  "/videos/helping-builders-4.mp4",
];

type ProductCardProps = {
  videoUrl: string;
  setRef: (el: HTMLDivElement | null) => void;
};

function ProductCard({ videoUrl, setRef }: ProductCardProps) {
  return (
    <div
      ref={setRef}
      className={[
        "absolute left-1/2 top-1/2",
        "h-72 w-65 md:h-96 md:w-[320px]",
        "overflow-hidden rounded-4xl",
        "border border-white/10 bg-black",
        "shadow-[0_30px_90px_rgba(0,0,0,0.75)]",
        "transform-gpu will-change-transform",
        "contain-layout contain-paint",
      ].join(" ")}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover pointer-events-none"
      />
    </div>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const extendedCards = useMemo(() => {
    return [...VIDEOS, ...VIDEOS, ...VIDEOS, ...VIDEOS];
  }, []);

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      if (!cards.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      let progress = 0;
      let ticker: gsap.TickerCallback | null = null;
      let resizeTimer: ReturnType<typeof setTimeout>;

      const setupMarquee = () => {
        if (ticker) {
          gsap.ticker.remove(ticker);
          ticker = null;
        }

        const viewportWidth = window.innerWidth;
        const isMobile = viewportWidth < 768;

        const cardWidth = isMobile ? 260 : 320;
        const gap = isMobile ? 12 : 28;
        const itemWidth = cardWidth + gap;
        const totalWidth = itemWidth * cards.length;

        const wrapX = gsap.utils.wrap(-totalWidth / 2, totalWidth / 2);

        const updateMarquee: gsap.TickerCallback = () => {
          if (!prefersReducedMotion) {
            progress -= 0.00022 * gsap.ticker.deltaRatio(60);

            if (progress < 0) {
              progress += 1;
            }
          }

          cards.forEach((card, index) => {
            const rawX = index * itemWidth + progress * totalWidth;
            const centeredX = rawX - totalWidth / 2;
            const x = wrapX(centeredX);

            const maxDistance = isMobile
              ? viewportWidth * 0.85
              : viewportWidth * 0.65;

            const normalizedDistance = gsap.utils.clamp(-1, 1, x / maxDistance);

            const distanceFromCenter = Math.abs(normalizedDistance);

            const rotateY = -normalizedDistance * (isMobile ? 30 : 48);

            const z = gsap.utils.interpolate(
              isMobile ? -120 : -260,
              isMobile ? 180 : 420,
              distanceFromCenter
            );

            const scale = gsap.utils.interpolate(
              isMobile ? 0.84 : 0.88,
              isMobile ? 1 : 1.08,
              distanceFromCenter
            );

            const opacity = gsap.utils.interpolate(0.82, 1, distanceFromCenter);

            const overlayOpacity = gsap.utils.interpolate(
              isMobile ? 0.56 : 0.68,
              0.08,
              distanceFromCenter
            );

            const zIndex = Math.round(distanceFromCenter * 100);

            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              x,
              z,
              rotateY,
              scale,
              opacity,
              zIndex,
              transformOrigin: "50% 50%",
            });

            const overlay = card.querySelector(".shadow-overlay");

            if (overlay) {
              gsap.set(overlay, {
                opacity: overlayOpacity,
              });
            }
          });
        };


        if (!prefersReducedMotion) {
          gsap.ticker.add(updateMarquee);
          ticker = updateMarquee;
        }
      };

      const onResize = () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
          setupMarquee();
        }, 150);
      };

      setupMarquee();

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        clearTimeout(resizeTimer);

        if (ticker) {
          gsap.ticker.remove(ticker);
        }
      };
    },
    {
      scope: rootRef,
      dependencies: [extendedCards.length],
    }
  );

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black px-4 pt-20 pb-10 text-white md:pt-28 md:pb-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-130 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_58%)]" />

      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[80px_80px]" /> */}

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur">
          We build for growth
        </p>

        <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-9 md:leading-14 tracking-tight text-white">
          Impossible is
          <br />
          <span className="font-serif italic tracking-[-0.04em] text-primary">
            nothing
          </span>
        </h1>
      </div>

      <div
        className="relative z-0 mt-8 flex h-107.5 w-full items-center justify-center sm:h-125 md:mt-4 md:h-155"
        style={{
          perspective: "1200px",
          contain: "layout paint size",
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
        aria-hidden="true"
      >
        <div
          className="relative h-full w-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {extendedCards.map((videoUrl, index) => (
            <ProductCard
              key={`${videoUrl}-${index}`}
              videoUrl={videoUrl}
              setRef={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>

      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" /> */}
    </section>
  );
}
