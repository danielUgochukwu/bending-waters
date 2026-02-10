"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";

interface Service {
    title: string;
    image: string;
}

interface ServicesCarouselProps {
    title: React.ReactNode;
    services: Service[];
    ctaText?: string;
}

export default function ServicesCarousel({
    title,
    services,
    ctaText = "Hire us"
}: ServicesCarouselProps) {
    const { openModal } = useModal();

    // Duplicate services to ensure seamless loop if not enough items, 
    // or just to ensure the marquee content is long enough.
    // The original code spread [...services, ...services].
    const marqueeServices = [...services, ...services, ...services];

    return (
        <section className="py-20 overflow-hidden bg-white">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                    {title}
                </h2>
            </div>

            <div className="relative w-full">
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    {marqueeServices.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] mx-4 rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-white text-2xl font-bold leading-tight">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Button
                    onClick={openModal}
                    variant="primary"
                    size="md"
                    className="px-10 py-4 text-lg"
                >
                    {ctaText}
                </Button>
            </div>
        </section>
    );
}
