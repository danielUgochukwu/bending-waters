"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
    image: string;
    title: string;
    category: string;
    href: string;
}

export default function WorkCard({ image, title, category, href }: WorkCardProps) {
    return (
        <Link href={href} className="group relative block w-full overflow-hidden rounded-2xl">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay - Optional dark tint on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>

            {/* Arrow Icon - Center */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6" />
            </div>

            {/* Content - Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6 transition-all duration-300">
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/80">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
            </div>
        </Link>
    );
}
