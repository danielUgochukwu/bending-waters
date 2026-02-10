"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TiltedImageProps {
    rotateAmplitude?: number;
}

export default function TiltedImage({
    rotateAmplitude = 3,
    imageSrc = "/images/sm-hero.png",
    altText = "hero section showcase",
    width = 800,
    height = 600
}: TiltedImageProps & { imageSrc?: string; altText?: string; width?: number; height?: number }) {
    const figureRef = useRef<HTMLElement | null>(null);
    const imageWrapperRef = useRef<HTMLDivElement | null>(null);

    const [lastY, setLastY] = useState<number>(0);

    useGSAP(() => {
        if (!figureRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            gsap.set(figureRef.current, { opacity: 1, y: 0 });
            return;
        }

        // Entrance animation (Framer Motion replacement)
        gsap.fromTo(
            figureRef.current,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        );
    }, []);

    function handleMouseMove(
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) {
        if (!figureRef.current || !imageWrapperRef.current) return;

        const rect = figureRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotateX =
            (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotateY =
            (offsetX / (rect.width / 2)) * rotateAmplitude;

        // Smooth spring-like tilt
        gsap.to(imageWrapperRef.current, {
            rotateX,
            rotateY,
            duration: 0.6,
            ease: "power3.out",
        });

        // Velocity-based logic (kept for extensibility)
        const velocityY = offsetY - lastY;
        setLastY(offsetY);

        // Hook point for future caption animation
        // gsap.to(figcaptionRef.current, { rotateX: -velocityY * 0.6 });
    }

    function handleMouseLeave() {
        if (!imageWrapperRef.current) return;

        gsap.to(imageWrapperRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        setLastY(0);
    }

    return (
        <div className="transform-gpu will-change-transform">
            <figure
                ref={figureRef}
                className="relative w-full h-full mt-16 max-w-4xl mx-auto flex flex-col items-center justify-center [perspective:800px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={imageWrapperRef}
                    className="relative w-full max-w-4xl rounded-[15px] transform-gpu will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <img
                        src={imageSrc}
                        className="w-full rounded-[15px] transform-[translateZ(0)]"
                        alt={altText}
                        width={width}
                        height={height}
                        loading="eager"
                    />
                </div>
            </figure>
        </div>
    );
}
