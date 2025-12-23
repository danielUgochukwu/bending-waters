"use client";

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    "AI SEO", "SEO", "Paid media",
    "Creative", "Content", "Social Media",
    "App Store", "Analytics", "Other"
];

const CLIENTS = [
    "HP", "SoFi", "Intuit", "Mitsubishi",
    "Adobe", "Nissan", "Marriott", "L'Oreal",
    "Kumon", "Cartier", "DHL", "Clarins",
    "Unilever", "Canon", "Prudential", "AirAsia",
    "Western Union", "Sony Music", "Domino's", "Levi's"
];

export default function ServicesSection() {
    const container = useRef(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // Handle checkbox toggle
    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: container.current, start: "top 80%" } });

        // 1. Animate Logo Grid (Left Side)
        // tl.from('.client-logo', {
        //     opacity: 0,
        //     y: 20,
        //     stagger: 0.05,
        //     duration: 0.6,
        //     ease: "power2.out"
        // });

        // 2. Animate Form Elements (Right Side)
        tl.from('.form-element', {
            x: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4");

    }, { scope: container });

    return (
        <section ref={container} className="w-full bg-[radial-gradient(circle,rgba(18,17,17,0.99)_90%,rgba(247,58,0,0.77)_100%)] flex flex-col-reverse lg:flex-row font-sans md:py-24 md:px-32">

            {/* LEFT COLUMN: Client Logos (Black) */}
            <div className="w-full lg:w-1/2 bg-np-dark text-white p-12 lg:p-20 flex flex-col justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 opacity-100">
                    {CLIENTS.map((client, index) => (
                        <div key={index} className="client-logo flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
                            {/* NOTE: In a real app, replace this text with <img> or <svg> tags.
                 I am using text styling to simulate the white logo look.
              */}
                            <span className="text-xl font-bold tracking-wider text-gray-300 hover:text-white text-center">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT COLUMN: Service Form (Light Gray) */}
            <div className="w-full lg:w-1/2 bg-np-grey p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto w-full">

                    <h2 className="form-element text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        How can we help you get found?
                    </h2>

                    {/* Custom Checkbox Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {SERVICES.map((service, index) => {
                            const isSelected = selectedServices.includes(service);
                            return (
                                <div
                                    key={index}
                                    onClick={() => toggleService(service)}
                                    className="form-element group relative cursor-pointer"
                                >
                                    <div className={`
                    flex items-center gap-3 p-4 bg-white rounded-sm border transition-all duration-200 h-full
                    ${isSelected ? 'border-transparent' : 'border-transparent hover:border-gray-300'}
                  `}>
                                        {/* Checkbox Square */}
                                        <div className={`
                      w-5 h-5 border flex items-center justify-center transition-colors shrink-0
                      ${isSelected ? 'bg-np-orange border-np-orange' : 'bg-white border-gray-300'}
                    `}>
                                            {isSelected && <Check size={14} className="text-white" />}
                                        </div>

                                        {/* Label */}
                                        <span className={`font-medium text-sm ${isSelected ? 'text-black' : 'text-gray-600'}`}>
                                            {service}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Submit Button */}
                    <div className="form-element flex justify-center">
                        <button className="bg-np-orange hover:bg-np-orange text-white text-lg font-medium py-3 px-12 rounded-sm shadow-sm transition-transform active:scale-95">
                            Get started
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
}