"use client";

import { useEffect, useRef, useState } from "react";

const communities = [
  {
    number: "01",
    category: "Fashion",
    label: "Communities",
    description:
      "Style-forward brands redefining African fashion commerce with purpose.",
  },
  {
    number: "02",
    category: "Lifestyle",
    label: "Communities",
    description:
      "Wellness and lifestyle businesses scaling with integrity and clarity.",
  },
  {
    number: "03",
    category: "Founders",
    label: "Communities",
    description:
      "Visionary entrepreneurs building Africa's resilient next chapter.",
  },
  {
    number: "04",
    category: "Startup",
    label: "Communities",
    description:
      "Early-stage innovators who have earned the right to grow fast.",
  },
  {
    number: "05",
    category: "Tech",
    label: "Communities",
    description:
      "Digital builders advancing fintech, agritech, and healthtech across Africa.",
  },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let frame = 0;
    const totalFrames = Math.round(duration / 16);

    const timer = window.setInterval(() => {
      frame += 1;

      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * eased));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, triggered]);

  return count;
}

function CommunityIcon({ index }: { index: number }) {
  const icons = ["▣", "◌", "△", "↑", "⌘"];

  return (
    <div className="mb-5 flex size-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-lg text-primary">
      {icons[index]}
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(1000, 1800, visible);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg- px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* Noise */}
      <div className="noisy pointer-events-none absolute inset-0 z-0 opacity-[0.05]" />


      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div
            className={[
              "mb-6 flex items-center gap-3 transition-all duration-700",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
          >
            <span className="h-px w-7 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Our Communities
            </span>
          </div>

          <h2
            className={[
              "max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white transition-all delay-100 duration-700 md:text-5xl",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            ].join(" ")}
          >
            We build communities of business owners contributing to
            Africa&apos;s{" "}
            <span className="text-primary">economic renaissance</span>
          </h2>

          {/* Stat banner */}
          <div
            className={[
              "mt-10 flex max-w-xl items-center gap-6 rounded-2xl border border-primary/25 bg-primary/10 px-6 py-5 transition-all delay-200 duration-700",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
          >
            <div className="min-w-24 text-4xl font-black leading-none text-primary md:text-5xl">
              {count.toLocaleString()}+
            </div>

            <div className="h-12 w-px shrink-0 bg-primary/30" />

            <div className="text-sm leading-relaxed text-white/60">
              <strong className="mb-1 block font-semibold text-white">
                Business Owners
              </strong>
              across fashion, tech, lifestyle, and beyond — growing with
              purpose.
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {communities.map((community, index) => (
            <article
              key={community.number}
              className={[
                "group relative min-h-[250px] border-b border-r border-white/10 bg-accent p-7 transition-all duration-500 hover:bg-primary/10 sm:border-b-0",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              ].join(" ")}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <span className="mb-6 block text-[10px] font-semibold tracking-[0.18em] text-primary/60">
                {community.number}
              </span>

              <CommunityIcon index={index} />

              <h3 className="mb-2 text-xl font-bold text-white">
                {community.category}
              </h3>

              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
                {community.label}
              </span>

              <p className="text-sm leading-relaxed text-white/55 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                {community.description}
              </p>

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Footer */}
        <div
          className={[
            "mt-12 flex items-center gap-4 transition-all delay-500 duration-700",
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div className="h-px flex-1 bg-white/10" />
          <span className="size-1 rounded-full bg-primary" />
          <span className="text-center text-[11px] uppercase tracking-[0.16em] text-white/35">
            Raising zebras — resilient, profitable, community-rooted
          </span>
          <span className="size-1 rounded-full bg-primary" />
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
