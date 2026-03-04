"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function BendingWatersHero() {
  const container = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subWrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!title.current || !hero.current || !subWrapper.current) return;

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

          // Respect reduced motion
          if (reduceMotion) {
            gsap.set(title.current, { clearProps: "all" });
            gsap.set(subWrapper.current!.querySelectorAll("p"), {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            });
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: hero.current,
              start: "top top",
              end: "+=150%",
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });

          // Make scaling anchor predictable
          gsap.set(title.current, { transformOrigin: "left top", autoAlpha: 1 });

          // Where should the title land (top-left “navbar-ish”)
          const targetTop = isMobile ? 16 : 24;
          const targetLeft = isMobile ? 16 : 24;

          // Scale targets
          const targetScale = isMobile ? 0.35 : 0.14;

          // 1) Move + scale title into the top-left
          tl.to(
            title.current,
            {
              scale: targetScale,
              x: () => {
                const rect = title.current!.getBoundingClientRect();
                return targetLeft - rect.left;
              },
              y: () => {
                const rect = title.current!.getBoundingClientRect();
                return targetTop - rect.top;
              },
              ease: "none",
            },
            0
          );

          // 2) Fade title out after it has reached the top-left
          // Tweak 0.7 -> later/earlier fade (0.6–0.85 is a good range)
          tl.to(
            title.current,
            {
              autoAlpha: 0, // opacity + visibility hidden
              ease: "none",
            },
            0.7
          );

          // 3) Cascade reveal subtitle text behind
          const pTags = subWrapper.current!.querySelectorAll("p");

          tl.fromTo(
            pTags,
            {
              opacity: 0,
              y: isMobile ? 24 : 56,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              stagger: 0.12,
              ease: "power2.out",
            },
            0.08
          );
        }
      );

      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full noisy text-white antialiased">
      <section
        ref={hero}
        // IMPORTANT: keep at 100vh so the title is visible immediately
        className="relative h-screen w-full flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 overflow-hidden"
      >
        {/* Soft centered ambient glow behind the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col justify-end h-full">
          {/* Subtitle - Absolute so it smoothly fades in behind the moving title */}
          <div
            ref={subWrapper}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[90vw] md:max-w-3xl text-[7vw] sm:text-3xl md:text-5xl lg:text-6xl text-zinc-500 font-medium leading-[1.2] md:leading-[1.1] tracking-tight pointer-events-none"
          >
            <p className="will-change-[opacity,transform,filter] m-0 pb-1 md:pb-2">
              We build <span className="text-white">remarkable</span>
            </p>
            <p className="will-change-[opacity,transform,filter] m-0 pb-1 md:pb-2">
              digital experiences
            </p>
            <p className="will-change-[opacity,transform,filter] m-0 pb-1 md:pb-2">
              through strategy,
            </p>
            <p className="will-change-[opacity,transform,filter] m-0">
              technology and <span className="text-white">design.</span>
            </p>
          </div>

          {/* Title */}
          <h1
            ref={title}
            className="font-bold font-bierika leading-[0.8] tracking-tighter text-[10.5vw] md:text-[11vw] lg:text-[120px] xl:text-[140px] uppercase will-change-transform z-20 m-0 whitespace-nowrap"
          >
            BendingWaters
          </h1>
        </div>
      </section>
    </div>
  );
}