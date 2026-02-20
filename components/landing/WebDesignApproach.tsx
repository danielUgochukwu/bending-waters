"use client";

import React from "react";
import { Search, GitBranch, Palette } from "lucide-react";

const approachSteps = [
    {
        title: "Discovery and research.",
        description: "We begin by understanding your business, your audience, and your current digital footprint. Through stakeholder interviews, competitive analysis, and user behavior audits, we uncover insights that guide design direction. This phase ensures everything we build is aligned with your unique brand and market.",
        Icon: Search,
    },
    {
        title: "UX strategy and wireframing.",
        description: "We develop site maps, wireframes, and interaction flows that reflect real user journeys. Every layout is mapped to a goal — whether it's engagement, conversion, or retention. At this stage, we prioritize structure and logic over visual design to make sure the foundation is rock solid.",
        Icon: GitBranch,
    },
    {
        title: "Visual design and brand expression.",
        description: "Once the blueprint is approved, we bring it to life with full visual design. This includes brand-consistent UI elements, animations, iconography, and content styling that elevate your digital presence. Every design choice is intentional — balancing beauty with usability.",
        Icon: Palette,
    },
];

export default function WebDesignApproach() {
    return (
        <section className="bg-[#f8f8f8] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-np-orange font-bold tracking-widest text-xs uppercase mb-4 block">
                        Web Design Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 max-w-4xl mx-auto leading-tight">
                        We turn digital experiences into measurable business results.
                    </h2>
                    <div className="w-12 h-[2px] bg-np-orange mx-auto mb-8" />
                    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        We design with purpose, rooted in strategy, guided by data, and aligned to business goals.
                        Our process combines UX research, creative ideation, technical planning, and CRO insight
                        into one unified workflow. The result: websites that aren't just beautiful — they're
                        high-performing growth engines.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gray-200 z-0" />

                    {approachSteps.map((step, index) => (
                        <div key={index} className="relative z-10">
                            <div className="flex flex-col items-start">
                                {/* Icon Circle */}
                                <div className="w-14 h-14 bg-np-orange rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-np-orange/20">
                                    <step.Icon size={24} />
                                </div>

                                <h3 className="text-2xl font-bold text-black mb-6">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Philosophy Label */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <span className="text-np-orange font-bold tracking-widest text-xs uppercase">
                        Our Philosophy
                    </span>
                </div>
            </div>
        </section>
    );
}
