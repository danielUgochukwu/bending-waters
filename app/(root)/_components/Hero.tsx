"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { CARD_DATA, ProductCardData } from "../_contstants";

function ProductCard({
  data,
  index,
  setRef,
}: {
  data: ProductCardData;
  index: number;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const Icon = data.icon;
  // Map to one of the 4 generated images
  const imageNum = (index % 4) + 1;
  const imageUrl = `/agency-images/${imageNum}.png`;

  return (
    <div
      ref={setRef}
      className={[
        "absolute left-1/2 top-1/2",
        "h-[360px] w-[260px] md:h-[420px] md:w-[320px]",
        "flex flex-col overflow-hidden rounded-3xl shadow-2xl",
        "transform-gpu will-change-transform",
        "contain-layout contain-paint",
        "border border-white/10 bg-black",
      ].join(" ")}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 p-2 backdrop-blur-md">
            <Icon size={24} className="text-[#a3ff90]" />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight drop-shadow-md">{data.name}</h3>
            <p className="text-xs font-medium opacity-80 drop-shadow-md">{data.desc}</p>
          </div>
        </div>
      </div>

      <div className="shadow-overlay pointer-events-none absolute inset-0 z-20 bg-black opacity-0" />
    </div>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Duplicate cards to ensure a smooth, seamless infinite wrap across wide screens.
  const extendedCards = [
    ...CARD_DATA,
    ...CARD_DATA.map((c) => ({ ...c, id: c.id + "_copy" })),
  ];

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      let progress = 0;
      const speed = 0.00025; // Base horizontal movement speed
      let currentUpdateFn: gsap.TickerCallback | null = null;

      function setupMarquee() {
        if (currentUpdateFn) {
          gsap.ticker.remove(currentUpdateFn);
        }

        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? 260 : 320;
        const gap = isMobile ? 10 : 24;
        const itemWidth = cardWidth + gap;
        const totalWidth = itemWidth * cards.length;

        // Ensure the X position stays within a balanced negative/positive range
        const wrapX = gsap.utils.wrap(-totalWidth / 2, totalWidth / 2);

        function updateMarquee() {
          if (!prefersReducedMotion) {
            progress -= speed;
            if (progress < 0) progress += 1;
          }

          cards.forEach((card, i) => {
            let linearX = i * itemWidth + progress * totalWidth;
            linearX = linearX - totalWidth / 2;
            const x = wrapX(linearX);

            // Calculate normalized distance from the center (-1 to 1 based on max screen range)
            const maxDist = isMobile ? window.innerWidth : window.innerWidth / 1.5;
            const normalizedDist = gsap.utils.clamp(-1, 1, x / maxDist);

            // Rotate inward: Left side cards rotate right (+), Right side cards rotate left (-)
            const rotateY = -normalizedDist * (isMobile ? 30 : 45);

            // Z positioning: Center is pushed back (farther), sides are pulled forward (closer)
            const baseZ = isMobile ? -100 : -200;
            const pullZ = isMobile ? 200 : 450;
            const z = Math.abs(normalizedDist) * pullZ + baseZ;

            // Scale: Slightly smaller in the center for depth emphasis
            const scale = (isMobile ? 0.85 : 0.9) + Math.abs(normalizedDist) * 0.15;

            // Z-index: Sides must overlay center cards correctly
            const zIndex = Math.round(Math.abs(normalizedDist) * 100);

            // Center fade logic: "Cards farther away should be slightly darker"
            const darkness = 1 - Math.abs(normalizedDist);
            const overlayOpacity = Math.max(0, darkness * (isMobile ? 0.5 : 0.7)); // Center gets dark overlay

            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              x: x,
              rotateY: rotateY,
              z: z,
              scale: scale,
              zIndex: zIndex,
              transformOrigin: "50% 50%",
            });

            const overlay = card.querySelector(".shadow-overlay");
            if (overlay) {
              gsap.set(overlay, { opacity: overlayOpacity });
            }
          });
        }

        if (!prefersReducedMotion) {
          gsap.ticker.add(updateMarquee);
        } else {
          updateMarquee();
        }

        currentUpdateFn = updateMarquee;
      }

      setupMarquee();

      let resizeTimer: NodeJS.Timeout;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setupMarquee, 150);
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        clearTimeout(resizeTimer);
        if (currentUpdateFn) gsap.ticker.remove(currentUpdateFn);
      };
    }, root);

    return () => ctx.revert();
  }, [extendedCards.length]);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-black pt-20 pb-8 md:pt-32 md:pb-16"
    >
      {/* Headline Layer */}
      <div className="z-10 mb-8 md:mb-16 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7rem)] font-light leading-[1.1] tracking-tight text-white md:text-8xl lg:text-9xl">
          Impossible is <br className="hidden sm:block" /> <span className="text-primary font-serif italic">nothing</span>
        </h1>
      </div>

      {/* 3D Marquee Layer */}
      <div
        className="relative mt-auto flex h-[400px] w-full items-center justify-center md:h-[600px]"
        style={{
          perspective: "1200px",
          contain: "layout paint size",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
        aria-hidden="true"
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {extendedCards.map((card, index) => (
            <ProductCard
              key={`${card.id}-${index}`}
              data={card}
              index={index}
              setRef={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
