"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import TiltedImage from "@/components/TiltedImage";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function HeroSection() {
    const containerRef = useRef<HTMLElement | null>(null);
    const bgRef = useRef<SVGSVGElement | null>(null);
    const badgeRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const actionsRef = useRef<HTMLDivElement | null>(null);
    const imageWrapperRef = useRef<HTMLDivElement | null>(null);

    useHeroAnimation({
        container: containerRef,
        bg: bgRef,
        badge: badgeRef,
        title: titleRef,
        text: textRef,
        actions: actionsRef,
        image: imageWrapperRef,
    });

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center -mt-16 overflow-hidden"
        >
            {/* Background SVG */}
            <svg
                ref={bgRef}
                aria-hidden="true"
                className="absolute -z-10 w-full -mt-40 md:mt-0"
                width="1440"
                height="676"
                viewBox="0 0 1440 676"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="-92"
                    y="-948"
                    width="1624"
                    height="1624"
                    rx="812"
                    fill="url(#a)"
                />
                <defs>
                    <radialGradient
                        id="a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(90 428 292)scale(812)"
                    >
                        <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
                        <stop offset="1" stopColor="#372AAC" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Badge */}
            <div
                ref={badgeRef}
                className="flex items-center mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2"
            >
                <div className="size-2.5 bg-green-500 rounded-full animate-pulse" />
                <span>Book a live demo today</span>
            </div>

            {/* Title */}
            <h1
                ref={titleRef}
                className="text-center text-5xl md:text-6xl font-semibold mt-4 max-w-2xl leading-tight"
            >
                Build, grow, and scale your business — without
                doing it alone
            </h1>

            {/* Text */}
            <p
                ref={textRef}
                className="text-center text-base max-w-lg mt-2"
            >
                BendingWaters supports small business owners,
                creatives, and founders with the tools, guidance,
                and digital support needed to grow sustainably
                — from idea to income.
            </p>

            {/* Actions */}
            <div
                ref={actionsRef}
                className="flex items-center gap-4 mt-8"
            >
                <button className="flex items-center gap-2 bg-np-orange hover:bg-np-orange-700 text-white rounded-lg px-7 h-11 active:scale-95 transition">
                    Join the community
                    <ArrowRight className="size-5" />
                </button>

                <button className="border border-slate-400 rounded-lg px-8 h-11 hover:bg-white/10 active:scale-95 transition focus-visible:ring-2 focus-visible:ring-slate-400">
                    Learn more
                </button>
            </div>

            {/* Tilted image */}
            <div ref={imageWrapperRef} className="will-change-transform">
                <TiltedImage />
            </div>
        </section>
    );
}
