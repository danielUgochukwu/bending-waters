"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { CARD_DATA, ProductCardData } from "../_contstants";

function ProductCard({
  data,
  setRef,
}: {
  data: ProductCardData;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const Icon = data.icon;
  const isLight = data.type === "light";

  return (
    <div
      ref={setRef}
      className={[
        "absolute left-1/2 top-1/2",
        "h-[450px] w-[320px] md:h-[540px] md:w-[380px]",
        "flex flex-col overflow-hidden rounded-3xl shadow-2xl",
        "transform-gpu will-change-transform",
        "contain-layout contain-paint",
        data.brandColor,
        data.border ? `border ${data.border}` : "",
      ].join(" ")}
      style={{
        backfaceVisibility: "hidden",
        transform: "translate3d(-50%, -50%, 0)",
      }}
    >
      <div
        className={`flex items-center justify-between p-6 ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`rounded-xl p-2 ${
              isLight ? "bg-black/5" : "bg-white/10 backdrop-blur-md"
            }`}
          >
            <Icon
              size={24}
              className={
                isLight
                  ? "text-black"
                  : data.id === "c2"
                    ? "text-[#a3ff90]"
                    : "text-white"
              }
            />
          </div>

          <div>
            <h3 className="text-lg font-bold leading-tight">{data.name}</h3>
            <p className="text-xs font-medium opacity-70">{data.desc}</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-3 px-6 pb-6">
        {data.type === "ui" && (
          <>
            <div
              className={`mb-2 h-24 w-full rounded-xl ${
                isLight ? "bg-black/5" : "bg-white/10"
              }`}
            />
            <div className="flex gap-3">
              <div
                className={`h-32 flex-1 rounded-xl ${
                  isLight ? "bg-black/5" : "bg-white/10"
                }`}
              />
              <div
                className={`h-32 w-1/3 rounded-xl ${
                  isLight ? "bg-black/5" : "bg-white/10"
                }`}
              />
            </div>
            <div
              className={`mt-auto h-6 w-2/3 rounded-md ${
                isLight ? "bg-black/10" : "bg-white/20"
              }`}
            />
          </>
        )}

        {data.type === "dark" && (
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="flex h-16 items-end justify-between border-b border-white/10 pb-2">
              {[40, 70, 30, 90, 50, 80].map((height, index) => (
                <div
                  key={index}
                  className="w-3 rounded-t-sm bg-[#a3ff90]/80"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="h-4 w-full rounded bg-white/5" />
            <div className="h-4 w-3/4 rounded bg-white/5" />
          </div>
        )}

        {data.type === "gradient" && (
          <div className="relative flex flex-1 items-center justify-center overflow-hidden">
            <div className="absolute inset-0 scale-105 rotate-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm" />
            <div className="absolute inset-0 -rotate-2 rounded-xl border border-white/20 bg-black/10 backdrop-blur-md" />
            <Icon size={80} className="z-10 text-white/50 drop-shadow-xl" />
          </div>
        )}

        {data.type === "light" && (
          <div className="flex flex-1 flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-inner">
            <div className="h-10 w-full rounded-lg bg-zinc-100" />
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-zinc-200" />
              <div className="h-8 flex-1 rounded-lg bg-zinc-100" />
            </div>
            <div className="mt-2 flex-1 rounded-lg border border-zinc-100 bg-zinc-50" />
          </div>
        )}
      </div>

      <div className="shadow-overlay pointer-events-none absolute inset-0 bg-black opacity-0" />
    </div>
  );
}

export default function ProductHero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const totalCards = cards.length;

      if (!totalCards) return;

      const anglePerCard = 360 / totalCards;
      const radius = 950;
      const state = { angle: 0 };

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(cards, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        force3D: true,
      });

      const overlays = cards
        .map((card) => card.querySelector(".shadow-overlay"))
        .filter(Boolean);

      gsap.set(overlays, {
        willChange: "opacity",
      });

      const render = () => {
        cards.forEach((card, index) => {
          let currentAngle = (index * anglePerCard + state.angle) % 360;

          if (currentAngle < 0) currentAngle += 360;

          let opacity = 1;

          if (currentAngle > 90 && currentAngle < 270) {
            opacity = 0;
          } else if (currentAngle > 75 && currentAngle <= 90) {
            opacity = 1 - (currentAngle - 75) / 15;
          } else if (currentAngle >= 270 && currentAngle < 285) {
            opacity = (currentAngle - 270) / 15;
          }

          const distanceFromFront = Math.min(currentAngle, 360 - currentAngle);
          const darkness = Math.min((distanceFromFront / 90) * 0.7, 0.7);

          gsap.set(card, {
            rotateY: currentAngle,
            z: -radius,
            opacity,
          });

          const overlay = card.querySelector(".shadow-overlay");

          if (overlay) {
            gsap.set(overlay, {
              opacity: darkness,
            });
          }
        });
      };

      render();

      if (prefersReducedMotion) return;

      const tick = () => {
        state.angle += 0.08;

        if (state.angle >= 360) {
          state.angle -= 360;
        }

        render();
      };

      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex h-[550px] w-full items-center justify-center overflow-hidden md:h-[650px]"
      style={{
        contain: "layout paint size",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <div
        className="relative flex h-full w-full max-w-[1400px] items-center justify-center"
        style={{
          perspective: "1200px",
          contain: "layout paint",
        }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(300px)",
          }}
        >
          {CARD_DATA.map((card, index) => (
            <ProductCard
              key={card.id}
              data={card}
              setRef={(el) => {
                cardsRef.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
