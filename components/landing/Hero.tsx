"use client"

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Mask reveal animation
    tl.from('.hero-element', {
      y: "100%",
      duration: 1.5,
      stagger: 0.2,
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="w-full h-[80vh] bg-black text-white flex-center px-6 py-20 md:px-12"
    >
      {/* Container width limited for readability.
         'items-start' (left) on mobile, 'md:items-center' (center) on desktop.
         'text-left' on mobile, 'md:text-center' on desktop.
      */}
      <div className="max-w-5xl w-full flex flex-col gap-8 items-start text-left md:items-center md:text-center  max-sm:pt-16 md:mt-20">

        {/* Headline */}
        <div className="overflow-hidden">
          <h1 className="hero-element text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
            We make sure customers find you everywhere from{' '}
            <span className="text-np-orange">Google</span> to{' '}
            <span className="text-np-orange">ChatGPT</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="overflow-hidden">
          <p className="hero-element text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
            We help you show up everywhere customers are searching, swiping, scrolling, streaming, and shopping.
          </p>
        </div>

        {/* CTA Button */}
        <div className="overflow-hidden p-1"> {/* Added padding to avoid clipping shadow/outline if any */}
          <MagneticButton>
            <Link
              href="#"
              className="hero-element inline-flex items-center gap-2 bg-np-orange text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Discover More
              <div className="bg-white rounded-full p-1">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
