import React from 'react'
import Image from 'next/image'
import { Briefcase, MapPin } from 'lucide-react'

const talents = [
    {
        name: "Oluwatosin Adeola",
        role: "Writer",
        location: "Nigeria",
        image: "/images/career-1.png"
    },
    {
        name: "Natasha Decker",
        role: "Writer",
        location: "United States",
        image: "/images/career-2.png"
    },
    {
        name: "Herrana Addisu",
        role: "Content Creator",
        location: "Ethiopia",
        image: "/images/career-3.png"
    },
    {
        name: "JeanneMarie Hickley",
        role: "Graphic Designer",
        location: "South Africa",
        image: "/images/career-4.png"
    },
    {
        name: "Sarah Jenkins",
        role: "Product Manager",
        location: "United Kingdom",
        image: "/images/career-5.png"
    },
    {
        name: "Michael Chen",
        role: "Developer",
        location: "Canada",
        image: "/images/career-6.png"
    },
]

const TalentCard = ({ talent }: { talent: typeof talents[0] }) => {
    return (
        <div className="relative min-w-[300px] h-[400px] rounded-2xl overflow-hidden group mx-4">
            <Image
                src={talent.image}
                alt={talent.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{talent.name}</h3>

                <div className="flex items-center gap-2 text-sm text-gray-200 mb-1">
                    <Briefcase size={14} />
                    <span>{talent.role}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-200 mb-4">
                    <MapPin size={14} />
                    <span>{talent.location}</span>
                </div>

                <div className="flex gap-3">
                    <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                        View Profile
                    </button>
                    <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                        Hire
                    </button>
                </div>
            </div>
        </div>
    )
}

const TalentMarquee = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-medium text-center text-black">
                    Top <span className="font-serif italic text-np-orange">talent</span> on BendingWaters
                </h2>
            </div>

            <div className="flex w-full">
                <div className="flex animate-infinite-scroll">
                    {/* First set of cards */}
                    {talents.map((talent, index) => (
                        <TalentCard key={`original-${index}`} talent={talent} />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {talents.map((talent, index) => (
                        <TalentCard key={`duplicate-${index}`} talent={talent} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TalentMarquee
