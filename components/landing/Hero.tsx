"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import  Button  from '@/components/Button'

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="w-full min-h-[75vh] bg-black text-white flex flex-col justify-center items-center px-6 py-28 md:px-12">
      {/* Container width limited for readability.
         'items-start' (left) on mobile, 'md:items-center' (center) on desktop.
         'text-left' on mobile, 'md:text-center' on desktop.
      */}
      <div className="w-full flex flex-col gap-8 items-start text-left md:items-center md:text-center max-w-5xl mx-auto">
        {/* Headline */}
        <div className="overflow-hidden max-w-5xl">
          <h1 className="hero-element text-2xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
            We are a marketing, media, and technology{" "}
            <span className="text-np-orange">company</span>. We help you get{" "}
            <span className="text-np-orange">found</span> by customers who
            matter.
          </h1>
        </div>

        {/* Subtext */}
        <div className="overflow-hidden max-w-3xl">
          <p className="hero-element text-md md:text-lg font-light leading-relaxed  text-gray-300">
            We help you show up everywhere customers are searching, swiping,
            scrolling, streaming, and shopping.
          </p>
        </div>

        {/* CTA Button */}
        <Button
            varient={`primary`}
            size={`sm`}
            onClick={openModal}
        >Work with us</Button>
      </div>
    </section>
  );
}
