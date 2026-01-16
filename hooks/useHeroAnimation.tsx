"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HeroAnimationRefs {
    container: RefObject<HTMLElement | null>;
    bg: RefObject<SVGSVGElement | null>;
    badge: RefObject<HTMLDivElement | null>;
    title: RefObject<HTMLHeadingElement | null>;
    text: RefObject<HTMLParagraphElement | null>;
    actions: RefObject<HTMLDivElement | null>;
    image: RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation(refs: HeroAnimationRefs) {
    useGSAP(
        () => {
            if (!refs.container.current) return;

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                // Instantly reveal content without animation
                gsap.set(
                    [
                        refs.bg.current,
                        refs.badge.current,
                        refs.title.current,
                        refs.text.current,
                        refs.actions.current,
                        refs.image.current,
                    ],
                    { opacity: 1, clearProps: "all" }
                );
                return;
            }

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                    duration: 0.9,
                },
                scrollTrigger: {
                    trigger: refs.container.current,
                    start: "top 75%",
                    once: true,
                },
            });

            tl.from(refs.bg.current, { opacity: 0, scale: 0.95 })
                .from(refs.badge.current, { y: -20, opacity: 0 }, "-=0.4")
                .from(refs.title.current, { y: 60, opacity: 0 }, "-=0.3")
                .from(refs.text.current, { y: 40, opacity: 0 }, "-=0.3")
                .from(refs.actions.current, { y: 40, opacity: 0 }, "-=0.3")
                .from(
                    refs.image.current,
                    {
                        y: 80,
                        opacity: 0,
                        rotateX: 12,
                        transformPerspective: 1000,
                    },
                    "-=0.4"
                );
        },
        { scope: refs.container }
    );
}
