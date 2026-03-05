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

          // Respect reduced motion
          if (reduceMotion) {
            gsap.set(titleEl, { clearProps: "all" });
            gsap.set(subWrapperEl.querySelectorAll("p"), {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            });
            return;
          }

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

          // Make scaling anchor predictable
          gsap.set(titleEl, { transformOrigin: "left top", autoAlpha: 1 });

          // Where should the title land (top-left “navbar-ish”)
          const targetTop = isMobile ? 16 : 24;
          const targetLeft = isMobile ? 16 : 24;

          // Scale targets
          const targetScale = isMobile ? 0.35 : 0.14;

          // 1) Move + scale title exactly to the Header logo position
          tl.to(
            titleEl,
            {
              scale: () => {
                const headerLogo = document.getElementById("header-logo");
                if (headerLogo) {
                  const headerRect = headerLogo.getBoundingClientRect();
                  const titleRect = titleEl.getBoundingClientRect();
                  return headerRect.width / titleRect.width;
                }
                return targetScale;
              },
              x: () => {
                const headerLogo = document.getElementById("header-logo");
                if (headerLogo) {
                  const headerRect = headerLogo.getBoundingClientRect();
                  const titleRect = titleEl.getBoundingClientRect();
                  return headerRect.left - titleRect.left;
                }
                const rect = titleEl.getBoundingClientRect();
                return targetLeft - rect.left;
              },
              y: () => {
                const headerLogo = document.getElementById("header-logo");
                if (headerLogo) {
                  const headerRect = headerLogo.getBoundingClientRect();
                  const titleRect = titleEl.getBoundingClientRect();
                  return headerRect.top - titleRect.top;
                }
                const rect = titleEl.getBoundingClientRect();
                return targetTop - rect.top;
              },
              ease: "none",
              duration: 1,
            },
            0
          );

          // 2) Fade title out after it has reached and perfectly overlapped the header logo
          tl.to(
            titleEl,
            {
              autoAlpha: 0, // opacity + visibility hidden
              ease: "none",
              duration: 0.1,
            },
            0.9
          );

          // 3) Cascade reveal subtitle text behind
          const pTags = subWrapperEl.querySelectorAll("p");

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
    <div ref={container} className="w-full bg-black text-white antialiased">
      <section
        ref={hero}
        // IMPORTANT: use 100svh so the title is visibly at the bottom edge even when mobile browsers show address bars
        className="relative h-svh lg:h-screen w-full flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 overflow-hidden"
      >
        {/* Soft centered ambient glow behind the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col justify-end h-full">
          {/* Subtitle - Absolute so it smoothly fades in behind the moving title */}
          <div
            ref={subWrapper}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[90vw] md:max-w-3xl text-[7vw] sm:text-4xl md:text-6xl lg:text-7xl text-zinc-500 font-medium leading-[1.2] md:leading-[1.1] tracking-tight pointer-events-none"
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
          <div
            ref={title}
            className="w-fit mx-auto will-change-transform z-20 m-0 mb-8 sm:mb-24 md:mb-32 flex justify-center items-center"
          >
            <Image
              src="/images/logo.png"
              alt="BendingWaters Logo"
              width={400}
              height={400}
              className="w-[50vw] md:w-[35vw] lg:w-[300px] xl:w-[400px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}