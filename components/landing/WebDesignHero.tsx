"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
    Eye,
    Layout,
    Smartphone,
    CreditCard,
    Zap,
    Globe
} from "lucide-react";

const icons = [
    { Icon: Eye, label: "Visual Design" },
    { Icon: Layout, label: "UI/UX" },
    { Icon: Smartphone, label: "Responsive" },
    { Icon: CreditCard, label: "E-commerce" },
    { Icon: Zap, label: "Performance" },
    { Icon: Globe, label: "SEO" },
];

export default function WebDesignHero() {
    const orbitRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!orbitRef.current) return;

        const items = orbitRef.current.querySelectorAll(".orbit-item");

        // Set up initial positions in a circle
        items.forEach((item, index) => {
            const angle = (index / items.length) * Math.PI * 2;
            const radius = 180; // Adjust orbit radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            gsap.set(item, { x, y });
        });

        // Orbiting animation
        gsap.to(orbitRef.current, {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: "none",
        });

        // Counter-rotation for icons to keep them upright
        gsap.to(items, {
            rotation: -360,
            duration: 30,
            repeat: -1,
            ease: "none",
        });

        // Background floating elements animation
        const bgElements = containerRef.current?.querySelectorAll(".bg-dot");
        bgElements?.forEach((dot) => {
            gsap.to(dot, {
                x: "random(-20, 20)",
                y: "random(-20, 20)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-6 md:px-12 flex items-center"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/web-design/background.png"
                    alt="Tech Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10" />
            </div>

            {/* Background Glows/Dots */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-dot absolute w-1 h-1 bg-np-orange rounded-full opacity-30"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Content */}
                <div className="max-w-2xl">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 border border-np-orange flex items-center justify-center rounded">
                            <Layout className="text-np-orange w-6 h-6" />
                        </div>
                        <div className="h-[2px] w-12 bg-np-orange" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                        Website <span className="text-np-orange">Design</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-np-orange/30 pl-6">
                        Your website isn't just a destination, it's the digital front door to your brand,
                        and it plays a critical role in driving business performance. From first impression
                        to final conversion, every pixel, click, and page load contributes to how users
                        perceive, interact with, and trust your business.
                    </p>
                </div>

                {/* Right Side: Orbiting Icons */}
                <div className="relative flex items-center justify-center h-[500px]">
                    {/* Main Profile Image in Center */}
                    <div className="relative z-30 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-np-orange/20 p-2 overflow-hidden bg-black/50 backdrop-blur-sm shadow-[0_0_50px_rgba(255,102,0,0.2)]">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                                src="/images/web-design/profile.png"
                                alt="Web Design Expert"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Orbiting Ring */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-white/10 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px]" ref={orbitRef}>
                            {icons.map(({ Icon, label }, i) => (
                                <div
                                    key={i}
                                    className="orbit-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="group relative">
                                        <div className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white hover:border-np-orange transition-colors cursor-pointer backdrop-blur-md shadow-lg">
                                            <Icon size={20} />
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-np-orange uppercase tracking-widest">
                                            {label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Glowing Accents */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-np-orange/5 rounded-full blur-[100px] z-10" />
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-np-orange/10 rounded-full blur-[80px] z-10" />
                </div>
            </div>
        </section>
    );
}
