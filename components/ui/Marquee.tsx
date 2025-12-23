"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MarqueeProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // Duration in seconds for one full loop
    pauseOnHover?: boolean;
    reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
    children,
    className = "",
    speed = 20,
    pauseOnHover = false,
    reverse = false,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const content = contentRef.current;
            if (!content) return;

            // Set initial state
            gsap.set(content, { xPercent: reverse ? -50 : 0 });

            const tl = gsap.to(content, {
                xPercent: reverse ? 0 : -50,
                ease: "none",
                duration: speed,
                repeat: -1,
            });

            if (pauseOnHover) {
                containerRef.current?.addEventListener("mouseenter", () => tl.pause());
                containerRef.current?.addEventListener("mouseleave", () => tl.play());
            }

            return () => {
                if (pauseOnHover) {
                    containerRef.current?.removeEventListener("mouseenter", () => tl.pause());
                    containerRef.current?.removeEventListener("mouseleave", () => tl.play());
                }
                tl.kill();
            };
        },
        { scope: containerRef, dependencies: [speed, reverse, pauseOnHover] }
    );

    return (
        <div
            ref={containerRef}
            className={`w-full overflow-hidden whitespace-nowrap ${className}`}
        >
            <div ref={contentRef} className="inline-flex w-max">
                {children}
                {/* Duplicate children for seamless loop */}
                {children}
            </div>
        </div>
    );
};

export default Marquee;
