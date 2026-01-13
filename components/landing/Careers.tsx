"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
    const container = useRef(null);
    const gridRef = useRef(null);

    // Using existing assets to simulate the grid. In a real scenario, these would be distinct team photos.
    const images = [
        "/images/career-1.png",
        "/images/career-2.png",
        "/images/career-3.png",
        "/images/career-4.png",
        "/images/career-5.png",
        "/images/career-6.png",
        "/images/career-7.png",
        "/images/career-8.png",
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        // Parallax effect: Move the grid slightly slower than the scroll
        // We start it slightly shifted up (-10%) and move it down to 10%
        tl.fromTo(gridRef.current, { y: "-10%" }, { y: "10%", ease: "none" });

    }, { scope: container });

    return (
        <section ref={container} className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-black">
            {/* Background Grid */}
            {/* Added scale-110 to ensure no whitespace during parallax movement */}
            <div ref={gridRef} className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0 opacity-40 pointer-events-none scale-110">
                {images.map((src, index) => (
                    <div key={index} className="relative w-full h-full min-h-[200px] md:min-h-[300px]">
                        <Image
                            src={src}
                            alt={`Team member ${index + 1}`}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                    </div>
                ))}
            </div>

            {/* Dark Overlay Gradient for better text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60 z-0"></div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
                    <span className="text-np-orange font-bold tracking-widest uppercase text-sm md:text-base">
                        CAREERS
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Join an award winning digital marketing team.
                    </h2>

                    <div className="w-16 h-1 bg-np-orange my-4"></div>

                    <p className="text-neutral-200 text-lg md:text-xl leading-relaxed max-w-2xl">
                        We enjoy the work — but we take growth seriously.
                        This is a place to learn fast, own outcomes, and build something worth being proud of.
                    </p>

                    <div className="pt-8">
                        <Link
                            href="/careers"
                            className="inline-block px-10 py-4 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wide"
                        >
                            Search and apply
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
