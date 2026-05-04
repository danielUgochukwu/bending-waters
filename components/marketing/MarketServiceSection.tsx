"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";
import type { MarketService, MarketTheme } from "@/constants/market-pages";

type Props = {
  title: string;
  accent: string;
  services: MarketService[];
  ctaText?: string;
  theme?: MarketTheme;
};

const themeClasses: Record<MarketTheme, string> = {
  warm: "from-orange-500 via-pink-500 to-purple-600",
  bold: "from-violet-600 via-blue-600 to-cyan-500",
  premium: "from-slate-900 via-slate-700 to-zinc-500",
};

export default function MarketServiceSection({
  title,
  accent,
  services,
  ctaText = "Hire us",
  theme = "warm",
}: Props) {
  const { openModal } = useModal();

  const marqueeServices = [...services, ...services, ...services];

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="container mx-auto mb-14 px-4 text-center">
        <h2 className="mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">
          {title}{" "}
          <span className="font-serif italic text-np-orange">{accent}</span>
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {marqueeServices.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              className="group relative mx-4 h-[280px] w-[280px] overflow-hidden rounded-3xl bg-slate-900 p-6 md:h-[380px] md:w-[380px]"
            >
              {service.imageSrc ? (
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt ?? service.title}
                  fill
                  sizes="(min-width: 768px) 380px, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-br ${themeClasses[theme]}`}
                />
              )}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_35%),linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.08)_55%,rgba(0,0,0,0.18))]"
              />

              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/60">
                  Service
                </p>

                <h3 className="max-w-[12rem] text-2xl font-semibold leading-tight text-white md:text-4xl">
                  {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
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
