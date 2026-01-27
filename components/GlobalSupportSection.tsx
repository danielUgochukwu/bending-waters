import Image from 'next/image';
import { Award, BookOpen, Users, Building } from 'lucide-react';

const locations = [
    // North America
    { top: '35%', left: '22%' }, // West Coast US
    { top: '38%', left: '25%' }, // Midwest US
    { top: '40%', left: '28%' }, // East Coast US
    { top: '30%', left: '20%' }, // Canada West
    { top: '32%', left: '28%' }, // Canada East

    // South America
    { top: '65%', left: '32%' }, // Brazil
    { top: '75%', left: '30%' }, // Argentina
    { top: '60%', left: '28%' }, // Colombia

    // Europe
    { top: '30%', left: '48%' }, // UK
    { top: '32%', left: '50%' }, // Germany/France
    { top: '35%', left: '52%' }, // Italy/Spain

    // Asia/India
    { top: '45%', left: '65%' }, // India West
    { top: '48%', left: '68%' }, // India East
    { top: '40%', left: '75%' }, // China/Japan
    { top: '55%', left: '72%' }, // SE Asia

    // Australia
    { top: '75%', left: '85%' }, // East Coast
    { top: '78%', left: '82%' }, // South Coast
];

const stats = [
    {
        icon: Award,
        value: "+70",
        label: "AWARDS & MENTIONS",
        description: "We like to make our client partners shine. And we're just getting started."
    },
    {
        icon: BookOpen,
        value: "+500",
        label: "CLIENTS",
        description: "Long lasting partnerships that span industries and verticals across the globe."
    },
    {
        icon: Users,
        value: "+1,000",
        label: "EMPLOYEES",
        description: "Our 2024 employee satisfaction survey results are in- NP Digital is a great place to work."
    },
    {
        icon: Building,
        value: "28",
        label: "COUNTRIES",
        description: "We have a global team, and while we value in-person collaboration, it isn't required for success."
    }
];

export default function GlobalSupportSection() {
    return (
        <section className="bg-white text-black py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Global support, local relevancy.</h2>
                    <div className="w-20 h-1 bg-np-orange mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                        For our clients, we orchestrate the right mix of talent to build the perfect team. We put a strong focus on chemistry, relevant experience and proximity. For our employees, it doesn't matter where you live, we have employees all over the world.
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto aspect-[2/1]">
                    {/* Map Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/world-map-about-01.png"
                            alt="World Map"
                            fill
                            className="object-contain opacity-80"
                            priority
                        />
                    </div>

                    {/* Dots */}
                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className="absolute w-3 h-3 md:w-4 md:h-4"
                            style={{ top: loc.top, left: loc.left }}
                        >
                            <span className="absolute inline-flex h-full w-full rounded-full bg-np-orange opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-full w-full bg-np-orange"></span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4 text-np-orange">
                                <stat.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</h3>
                            <h4 className="font-bold text-sm tracking-wider uppercase mb-4">{stat.label}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
