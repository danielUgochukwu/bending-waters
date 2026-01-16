"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Videography",
        image: "/images/videography_service.png",
    },
    {
        title: "Writers / Copywriters / Journalists / Editors",
        image: "/images/writing_service.png",
    },
    {
        title: "Creative & Design",
        image: "/images/design_service.png",
    },
    {
        title: "Social Media & Marketing",
        image: "/images/social_media_service.png",
    },
    {
        title: "Photography",
        image: "/images/photography_service.png",
    },
];

export default function CreativeServices() {
    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900">
                    All the creative services you need
                    <br />
                    <span className="font-serif italic text-blue-600">— and beyond.</span>
                </h2>
            </div>

            <div className="relative w-full">
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    {[...services, ...services].map((service, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] mx-4 rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 font-medium transition-colors">
                    Read our content
                </button>
            </div>
        </section>
    );
}
