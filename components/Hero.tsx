"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const heroText = textRef.current;
    const navLogo = document.querySelector("#navbar-logo");
    if (!heroText || !navLogo) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(heroText, {
      y: 100,
      x: -690,
      transformOrigin: "center center",
      scale: 0.1,
      ease: "power2.inOut",
    })
      .to(heroText, { opacity: 0, duration: 0.1 }, ">-0.2")
      .to(navLogo, { opacity: 1, duration: 0.2 }, ">-0.1");

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background"
    >
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="BENDING WATERS" />
      </div>
    </section>
  );
};

export default Hero;
