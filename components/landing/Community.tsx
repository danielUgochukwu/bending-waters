"use client";

import React, { useEffect, useRef, useState } from "react";

const communities = [
  {
    number: "01",
    category: "Fashion",
    label: "Communities",
    description:
      "Style-forward brands redefining African fashion commerce with purpose.",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 mb-5 opacity-85"
      >
        <rect
          x="8"
          y="6"
          width="20"
          height="24"
          rx="1"
          stroke="#C85C2A"
          strokeWidth="1.2"
        />
        <path
          d="M13 6 C13 3 23 3 23 6"
          stroke="#C85C2A"
          strokeWidth="1.2"
          fill="none"
        />
        <line
          x1="13"
          y1="16"
          x2="23"
          y2="16"
          stroke="rgba(200,92,42,0.4)"
          strokeWidth="1"
        />
        <line
          x1="13"
          y1="20"
          x2="20"
          y2="20"
          stroke="rgba(200,92,42,0.4)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    number: "02",
    category: "Lifestyle",
    label: "Communities",
    description:
      "Wellness and lifestyle businesses scaling with integrity and clarity.",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 mb-5 opacity-85"
      >
        <circle cx="18" cy="18" r="10" stroke="#C85C2A" strokeWidth="1.2" />
        <path
          d="M18 8 Q22 14 18 18 Q14 14 18 8Z"
          fill="rgba(200,92,42,0.25)"
          stroke="#C85C2A"
          strokeWidth="0.8"
        />
        <path
          d="M18 18 Q24 22 22 28"
          stroke="rgba(200,92,42,0.5)"
          strokeWidth="0.8"
        />
        <path
          d="M18 18 Q12 22 14 28"
          stroke="rgba(200,92,42,0.5)"
          strokeWidth="0.8"
        />
      </svg>
    ),
  },
  {
    number: "03",
    category: "Founders",
    label: "Communities",
    description:
      "Visionary entrepreneurs building Africa's resilient next chapter.",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 mb-5 opacity-85"
      >
        <polygon
          points="18,5 32,28 4,28"
          stroke="#C85C2A"
          strokeWidth="1.2"
          fill="none"
        />
        <polygon
          points="18,12 26,26 10,26"
          fill="rgba(200,92,42,0.15)"
          stroke="rgba(200,92,42,0.4)"
          strokeWidth="0.8"
        />
        <circle cx="18" cy="19" r="2" fill="#C85C2A" />
      </svg>
    ),
  },
  {
    number: "04",
    category: "Startup",
    label: "Communities",
    description:
      "Early-stage innovators who have earned the right to grow fast.",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 mb-5 opacity-85"
      >
        <path
          d="M18 6 L28 18 L22 18 L22 30 L14 30 L14 18 L8 18 Z"
          stroke="#C85C2A"
          strokeWidth="1.2"
          fill="rgba(200,92,42,0.12)"
        />
        <circle cx="18" cy="12" r="2" fill="#C85C2A" />
      </svg>
    ),
  },
  {
    number: "05",
    category: "Tech",
    label: "Communities",
    description:
      "Digital builders advancing fintech, agritech, and healthtech across Africa.",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 mb-5 opacity-85"
      >
        <rect
          x="5"
          y="10"
          width="26"
          height="16"
          rx="1"
          stroke="#C85C2A"
          strokeWidth="1.2"
        />
        <line
          x1="10"
          y1="26"
          x2="10"
          y2="30"
          stroke="#C85C2A"
          strokeWidth="1.2"
        />
        <line
          x1="26"
          y1="26"
          x2="26"
          y2="30"
          stroke="#C85C2A"
          strokeWidth="1.2"
        />
        <line
          x1="7"
          y1="30"
          x2="29"
          y2="30"
          stroke="#C85C2A"
          strokeWidth="1.2"
        />
        <path
          d="M13 16 L16 19 L22 13"
          stroke="rgba(200,92,42,0.7)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    ),
  },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState<boolean[]>(
    new Array(communities.length).fill(false)
  );
  const count = useCountUp(1000, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          communities.forEach((_, i) => {
            setTimeout(
              () => {
                setCardVisible((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              },
              300 + i * 100
            );
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <section
        ref={sectionRef}
        className="relative pt-28 pb-24 bg-[#0A0907] overflow-hidden font-['Sora',sans-serif]"
      >
        {/* Grain texture overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-[1] opacity-60"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient warm glow top-right */}
        <div
          aria-hidden="true"
          className="absolute -top-30 -right-20 w-125 h-125 rounded-full pointer-events-none z-1"
          style={{
            background:
              "radial-gradient(circle, rgba(190, 85, 30, 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto px-10">
          {/* ── Header ── */}
          <div className="mb-20">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-2.5 mb-6 transition-[opacity,transform] duration-600 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="block w-7 h-px bg-primary" />
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-primary">
                Our Communities
              </span>
            </div>

            {/* Title */}
            <h2
              className={`text-4xl font-bold max-w-160 transition-[opacity,transform] duration-700 ease-out delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              We build communities of business owners contributing to
              Africa&apos;s{" "}
              <em className="italic text-primary font-serif">economic renaissance</em>
            </h2>

            {/* Stat Banner */}
            <div
              className={`flex items-center gap-8 mt-10 py-5 px-7 border border-[#C85C2A]/25 rounded-xs max-w-120 bg-[#C85C2A]/6 transition-[opacity,transform] duration-700 ease-out delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-[2.6rem] font-black text-primary leading-none min-w-22.5">
                {count.toLocaleString()}+
              </div>
              <div className="w-px h-10 bg-[#C85C2A]/30 shrink-0" />
              <div className="text-[0.8rem] font-light text-white/70 leading-normal">
                <strong className="block font-semibold text-text mb-0.5 text-[0.85rem]">
                  Business Owners
                </strong>
                across fashion, tech, lifestyle, and beyond — growing with
                purpose.
              </div>
            </div>
          </div>

          {/* ── Community Cards Grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {communities.map((c, i) => (
              <div
                key={i}
                className={`group relative bg-[#0A0907] p-8 px-6 cursor-default overflow-hidden
                  transition-[opacity,transform,background-color] duration-500 ease-out
                  hover:bg-[#111009]
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                  after:bg-[#C85C2A] after:transition-[width] after:duration-350 after:ease-out
                  hover:after:w-full
                  ${cardVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className="text-[0.6rem] font-semibold tracking-[0.15em] text-primary mb-6 block">
                  {c.number}
                </span>

                {c.icon}

                <div className="font-['Playfair_Display',serif] text-[1.15rem] font-bold text-[#F5EDE3] mb-[0.4rem] leading-[1.2]">
                  {c.category}
                </div>

                <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white/40 mb-4 block">
                  {c.label}
                </span>

                <p className="text-[0.75rem] font-light text-white/40 leading-[1.6] max-h-0 overflow-hidden opacity-0 group-hover:max-h-15 group-hover:opacity-100 transition-[max-height,opacity] duration-300 ease-out">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          {/* ── Footer ── */}
          <div
            className={`mt-12 flex items-center gap-4 transition-[opacity,transform] duration-600 ease-out delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="flex-1 h-px bg-white/[0.07]" />
            <div className="size-1 rounded-full bg-primary shrink-0" />
            <span className="text-[0.7rem] font-light tracking-widest text-white/40 uppercase whitespace-nowrap">
              Raising zebras — resilient, profitable, community-rooted
            </span>
            <div className="size-1 rounded-full bg-primary shrink-0" />
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>
        </div>
      </section>
    </>
  );
}
