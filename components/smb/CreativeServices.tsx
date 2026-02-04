"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";

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
  const { openModal } = useModal();
  return (
    <section className="py-8 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-2xl md:text-6xl font-medium tracking-tight text-slate-900">
          Built for business owners building
          <br />
          <span className="font-serif italic text-np-orange">
            real businesses
          </span>
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
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

      <div className="flex justify-center mt-8">
        <Button
          onClick={openModal}
          variant="primary"
          size="md"
          className="px-8"
        >
          Hire us
        </Button>
      </div>
    </section>
  );
}
