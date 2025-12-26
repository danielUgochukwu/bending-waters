"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
}

export default function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
    const container = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = container.current;
        const trackElement = track.current;
        if (!element || !trackElement) return;

        // Calculate the total width of the track to scroll
        // We want to scroll the entire width of the track minus the viewport width
        const getScrollAmount = () => {
            return -(trackElement.scrollWidth - window.innerWidth);
        };

        const tween = gsap.to(trackElement, {
            x: getScrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true, // Recalculate on resize
            },
        });

        return () => {
            tween.kill();
        };
    }, { scope: container });

    return (
        // The container height determines the speed/duration of the scroll.
        // 300vh means the user has to scroll 3 screen heights to get through the content.
        <section ref={container} className={`relative h-[300vh] bg-np-grey dark:bg-neutral-900 ${className}`}>
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
                <div ref={track} className="flex gap-12 px-12 md:px-24 w-max">
                    {children}
                </div>
            </div>
        </section>
    );
}
