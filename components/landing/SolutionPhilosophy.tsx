"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface PhilosophyItem {
    title: string;
    description: string;
}

interface SolutionPhilosophyProps {
    label: string;
    items: PhilosophyItem[];
}

export default function SolutionPhilosophy({
    label,
    items,
}: SolutionPhilosophyProps) {
    return (
        <section className="bg-[#f0f0f0] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-np-orange font-bold tracking-widest text-xs uppercase">
                        {label}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group h-[300px] perspective-[1000px] cursor-pointer"
                        >
                            <div className="relative h-full w-full transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                                {/* Front Side */}
                                <div className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center shadow-sm backface-hidden">
                                    <div className="mb-6 text-np-orange">
                                        <ChevronRight size={48} className="-rotate-45" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 bg-np-orange p-8 flex flex-col items-center justify-center text-center transform-[rotateY(180deg)] backface-hidden">
                                    <h3 className="text-xl font-bold text-black mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-black/80 text-sm font-medium leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
