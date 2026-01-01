"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {

  return (
    <section
      className="w-full h-screen bg-black text-white flex-center px-6 py-20 md:px-12"
    >
      {/* Container width limited for readability.
         'items-start' (left) on mobile, 'md:items-center' (center) on desktop.
         'text-left' on mobile, 'md:text-center' on desktop.
      */}
      <div className="w-full flex flex-col gap-4 items-start text-left md:items-center md:text-center  max-sm:pt-16 md:mt-20">

        {/* Headline */}
        <div className="overflow-hidden">
          <h1 className="hero-element max-w-3xl text-4xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
            We are a marketing, media, and technology <span className='text-np-orange'>company</span>.
            We help you get <span className='text-np-orange'>found</span> by customers who matter

          </h1>
        </div>

        {/* Subtext */}
        <div className="overflow-hidden">
          <p className="hero-element text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            We help you show up everywhere customers are searching, swiping, scrolling, streaming, and shopping.
          </p>
        </div>

        {/* CTA Button */}
        <div className="overflow-hidden p-1"> {/* Added padding to avoid clipping shadow/outline if any */}
          <Link
            href="#"
            className="hero-element inline-flex items-center gap-2 bg-np-orange text-sm text-white px-4 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            Discover More
            <div className="p-1">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
