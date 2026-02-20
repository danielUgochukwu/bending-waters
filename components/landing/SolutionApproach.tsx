"use client";

import React from "react";
import { getIcon } from "@/constants/icons";

interface ApproachStep {
    title: string;
    description: string;
    Icon: string;
}

interface SolutionApproachProps {
    label: string;
    title: string;
    description: string;
    steps: ApproachStep[];
    philosophyLabel?: string;
}

export default function SolutionApproach({
    label,
    title,
    description,
    steps,
    philosophyLabel,
}: SolutionApproachProps) {
    return (
        <section className="bg-[#f8f8f8] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-np-orange font-bold tracking-widest text-xs uppercase mb-4 block">
                        {label}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 max-w-4xl mx-auto leading-tight">
                        {title}
                    </h2>
                    <div className="w-12 h-[2px] bg-np-orange mx-auto mb-8" />
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gray-200 z-0" />

                    {steps.map((step, index) => {
                        const Icon = getIcon(step.Icon);
                        return (
                            <div key={index} className="relative z-10">
                                <div className="flex flex-col items-start">
                                    <div className="w-14 h-14 bg-np-orange rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-np-orange/20">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-black mb-6">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {philosophyLabel && (
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <span className="text-np-orange font-bold tracking-widest text-xs uppercase">
                            {philosophyLabel}
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
}
