"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { getIcon } from "@/constants/icons";

interface OrbitIcon {
    Icon: string;
    label: string;
}

interface SolutionHeroProps {
    title: string;
    subtitle: string;
    description: string;
    mainIcon: string;
    backgroundImage: string;
    profileImage: string;
    orbitIcons: OrbitIcon[];
}

export default function SolutionHero({
    title,
    subtitle,
    description,
    mainIcon,
    backgroundImage,
    profileImage,
    orbitIcons,
}: SolutionHeroProps) {
    const MainIcon = getIcon(mainIcon);
    const orbitRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!orbitRef.current) return;

        const items = orbitRef.current.querySelectorAll(".orbit-item");

        items.forEach((item, index) => {
            const angle = (index / items.length) * Math.PI * 2;
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            gsap.set(item, { x, y });
        });

        gsap.to(orbitRef.current, {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: "none",
        });

        gsap.to(items, {
            rotation: -360,
            duration: 30,
            repeat: -1,
            ease: "none",
        });

        // Background floating elements animation
        const bgElements = containerRef.current?.querySelectorAll(".bg-dot");
        bgElements?.forEach((dot) => {
            // Set random initial position on client side only to avoid hydration mismatch
            gsap.set(dot, {
                top: `${gsap.utils.random(0, 100)}%`,
                left: `${gsap.utils.random(0, 100)}%`,
                opacity: 0.3
            });

            gsap.to(dot, {
                x: "random(-20, 20)",
                y: "random(-20, 20)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });
    }, [orbitIcons]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black py-20 px-6 md:px-12 flex items-center"
        >
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10" />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-dot absolute w-1 h-1 bg-np-orange rounded-full opacity-0"
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 border border-np-orange flex items-center justify-center rounded">
                            <MainIcon className="text-np-orange w-6 h-6" />
                        </div>
                        <div className="h-[2px] w-12 bg-np-orange" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                        {title} <span className="text-np-orange">{subtitle}</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-np-orange/30 pl-6">
                        {description}
                    </p>
                </div>

                <div className="relative flex items-center justify-center h-[500px]">
                    <div className="relative z-30 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-np-orange/20 p-2 overflow-hidden bg-black/50 backdrop-blur-sm shadow-[0_0_50px_rgba(255,102,0,0.2)]">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                                src={profileImage}
                                alt="Expert"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-white/10 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px]" ref={orbitRef}>
                            {orbitIcons.map(({ Icon: iconName, label }, i) => {
                                const Icon = getIcon(iconName);
                                return (
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
                                );
                            })}
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-np-orange/5 rounded-full blur-[100px] z-10" />
                </div>
            </div>
        </section>
    );
}
