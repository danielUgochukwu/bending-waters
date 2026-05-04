"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BendingWatersHero() {
  const container = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const subWrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const titleEl = title.current;
      const heroEl = hero.current;
      const subWrapperEl = subWrapper.current;

      if (!titleEl || !heroEl || !subWrapperEl) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isMobile, reduceMotion } = context.conditions as {
            isMobile: boolean;
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set(titleEl, { clearProps: "all" });
            gsap.set(subWrapperEl, { opacity: 1, y: 0 });
            return;
          }

          // ✅ FIX 1: Pre-compute all measurements in a single pass.
          // Shared across scale/x/y — only 1x getElementById + 2x getBoundingClientRect
          // instead of 3x + 6x on every invalidate.
          const targetTop = isMobile ? 16 : 24;
          const targetLeft = isMobile ? 16 : 24;
          const fallbackScale = isMobile ? 0.35 : 0.14;

          let measurements = { scale: fallbackScale, x: 0, y: 0 };

          const measure = () => {
            const headerLogo = document.getElementById("header-logo"); // 1 query
            const titleRect = titleEl.getBoundingClientRect(); // 1 read
            if (headerLogo) {
              const headerRect = headerLogo.getBoundingClientRect(); // 1 read
              measurements = {
                scale: headerRect.width / titleRect.width,
                x: headerRect.left - titleRect.left,
                y: headerRect.top - titleRect.top,
              };
            } else {
              measurements = {
                scale: fallbackScale,
                x: targetLeft - titleRect.left,
                y: targetTop - titleRect.top,
              };
            }
          };

          // Re-measure on resize before GSAP recalculates tweens
          ScrollTrigger.addEventListener("refreshInit", measure);
          measure(); // initial measurement

          gsap.set(titleEl, { transformOrigin: "left top", autoAlpha: 1 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: heroEl,
              start: "top top",
              end: "+=150%",
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });

          // ✅ Single function call per value, all reading from the shared object
          tl.to(
            titleEl,
            {
              scale: () => measurements.scale,
              x: () => measurements.x,
              y: () => measurements.y,
              ease: "none",
              duration: 1,
            },
            0
          );

          tl.to(titleEl, { autoAlpha: 0, ease: "none", duration: 0.1 }, 0.9);

          // ✅ FIX 2: Animate the wrapper, not 4 individual <p> elements.
          // 1 compositor layer instead of 4. No filter:blur during scrub.
          tl.fromTo(
            subWrapperEl,
            { opacity: 0, y: isMobile ? 24 : 56 },
            { opacity: 1, y: 0, ease: "power2.out" },
            0.08
          );

          // ✅ FIX 3: Clean up the refreshInit listener on unmount/revert
          return () => {
            ScrollTrigger.removeEventListener("refreshInit", measure);
          };
        }
      );

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full bg-black text-white antialiased">
      <section
        ref={hero}
        className="relative h-svh lg:h-screen w-full flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 overflow-hidden"
      >
        {/* ✅ FIX 4: will-change-transform promotes the glow to its own layer
            so scroll/paint below it doesn't trigger a repaint of this element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none will-change-transform" />

        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col justify-end h-full">
          {/* ✅ FIX 2 continued: will-change on wrapper only, not children */}
          <div
            ref={subWrapper}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[90vw] md:max-w-3xl text-[7vw] sm:text-4xl md:text-6xl lg:text-7xl text-zinc-500 font-medium leading-[1.2] md:leading-[1.1] tracking-tight pointer-events-none will-change-[opacity,transform]"
          >
            {/* No will-change on individual paragraphs */}
            <p className="m-0 pb-1 md:pb-2">
              We build <span className="text-white">remarkable</span>
            </p>
            <p className="m-0 pb-1 md:pb-2">digital experiences</p>
            <p className="m-0 pb-1 md:pb-2">through strategy,</p>
            <p className="m-0">
              technology and <span className="text-white">design.</span>
            </p>
          </div>

          <div
            ref={title}
            className="w-fit mx-auto will-change-transform z-20 m-0 mb-8 sm:mb-24 md:mb-16 flex justify-center items-center"
          >
            {/* ✅ FIX 5: sizes prop tells Next.js the actual rendered width
                per breakpoint — prevents downloading a 1200px image for a 50vw slot */}
            <Image
              src="/images/logo.png"
              alt="BendingWaters Logo"
              width={400}
              height={400}
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 35vw, 600px"
              className="w-[50vw] md:w-[35vw] lg:w-11/12 xl:w-150 h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
