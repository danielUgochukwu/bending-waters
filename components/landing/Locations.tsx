"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { number: "5", label: "COUNTRIES" },
    { number: "1,000+", label: "COMMUNITIES" },
    { number: "100+", label: "CLIENTS" }
];

export default function Locations() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Header Animation
        tl.from(".loc-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Map Animation
        tl.from(".loc-map", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.4");

        // Stats Animation
        tl.from(".loc-stat", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.6");

    }, { scope: container });

    return (
        <section ref={container} className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">

            {/* Header */}
            <div className="max-w-4xl text-center mb-16 space-y-6">
                <h3 className="loc-header text-np-orange font-bold tracking-widest uppercase text-sm">
                    Locations
                </h3>

                <h2 className="loc-header text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    Global strategy, local execution
                </h2>

                <div className="loc-header w-24 h-1 bg-np-orange mx-auto rounded-full my-6"></div>

                <p className="loc-header text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    For our clients, we orchestrate the right mix of talent to build <span className="font-bold text-black">the perfect team</span>. We put a strong focus on chemistry, relevant experience and proximity. For our employees, it doesn't matter where you live, we have employees all over the world.
                </p>
            </div>

            {/* Map Image */}
            <div className="loc-map w-full max-w-6xl mb-20 relative">
                {/* 
                   Using a placeholder for the dotted map. 
                   In a real implementation, this would be an SVG or a high-res image of the dotted map.
                   I'll use a high-quality map image from Unsplash as a placeholder for now, 
                   but styled to look somewhat consistent, or I can try to find a transparent map png if possible.
                   Since I can't browse, I will use a clean map image.
                */}
                <div className="relative aspect-2/1 w-full">
                    <img
                        src="/images/map-with-dots-1030x499.webp"
                        alt="World Map"
                        className="w-full h-full object-contain opacity-80"
                    />

                    {/* Simulated Dots (just a few for visual representation as per the design) */}
                    {/* North America */}
                    <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-np-orange rounded-full shadow-lg animate-pulse"></div>
                    <div className="absolute top-[35%] left-[18%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>
                    <div className="absolute top-[32%] left-[25%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>

                    {/* Europe */}
                    <div className="absolute top-[25%] left-[48%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>
                    <div className="absolute top-[28%] left-[50%] w-3 h-3 bg-np-orange rounded-full shadow-lg animate-pulse"></div>

                    {/* Asia */}
                    <div className="absolute top-[35%] left-[70%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>
                    <div className="absolute top-[40%] left-[75%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>

                    {/* South America */}
                    <div className="absolute top-[60%] left-[28%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>

                    {/* Australia */}
                    <div className="absolute top-[70%] left-[85%] w-3 h-3 bg-np-orange rounded-full shadow-lg"></div>
                </div>
            </div>

            {/* Stats */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {STATS.map((stat, index) => (
                    <div key={index} className="loc-stat flex flex-col items-center gap-2">
                        <span className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800">
                            {stat.number}
                        </span>
                        <span className="text-np-orange font-bold tracking-widest uppercase text-sm md:text-base">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>

        </section>
    );
}
