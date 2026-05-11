"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   Animated counter hook — fires once when element enters viewport
───────────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);
  const started = useRef(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4); // ease-out-quart

          setValue(Math.round(eased * target));

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return { value, nodeRef };
}

interface StatCardProps {
  prefix?: string;
  target: number;
  suffix?: string;
  label: string;
  delay?: string;
}

function StatCard({
  prefix = "",
  target,
  suffix = "",
  label,
  delay = "0ms",
}: StatCardProps) {
  const { value, nodeRef } = useCountUp(target);

  return (
    <div
      className="animate-[bw-rise_0.6s_both_ease] border-l-2 border-primary pl-4"
      style={{ animationDelay: delay }}
    >
      <span
        ref={nodeRef}
        className="block font-serif text-[clamp(1.75rem,4vw,2.6rem)] font-bold leading-none tracking-[-0.02em] text-primary"
      >
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>

      <span className="mt-[0.45rem] block text-[0.65rem] font-medium uppercase tracking-[0.14em] text-gray">
        {label}
      </span>
    </div>
  );
}

function LogoTile({
  name,
  logo,
  index,
}: {
  name: string;
  logo: string;
  index: number;
}) {
  return (
    <div
      className="group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden bg-gray p-5 transition-colors duration-300 ease-out hover:bg-[#0A1F2E]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute bottom-0 left-0 z-10 h-[1.5px] w-0 bg-linear-to-r from-primary to-transparent transition-all duration-300 ease-out group-hover:w-full" />

      <div className="relative size-full grayscale brightness-[0.45] transition duration-300 ease-out group-hover:grayscale-0 group-hover:brightness-100">
        <Image src={logo} alt={name} fill className="object-contain" />
      </div>
    </div>
  );
}

const clients = [
  { name: "RefiJet", logo: "/images/client-1.png" },
  { name: "ZAGG", logo: "/images/client-2.png" },
  { name: "Adobe", logo: "/images/client-3.png" },
  { name: "Claire's", logo: "/images/client-4.png" },
  { name: "Universal Technical Institute", logo: "/images/client-5.png" },
  { name: "SoFi", logo: "/images/client-6.png" },
  { name: "CNN", logo: "/images/client-7.png" },
];

export default function ClientResults() {
  return (
    <section
      className="relative w-full overflow-hidden bg-dark py-8 font-sans text-white before:pointer-events-none before:absolute before:right-[-0.04em] before:top-[-0.08em] before:z-0 before select-none before:font-serif before:text-[clamp(18rem,34vw,34rem)] before:font-bold before:italic before:leading-none before:text-transparent before:content-['01'] before:[-webkit-text-stroke:1.5px_#0A1F2E]"
      aria-labelledby="bw-results-heading"
    >
      <div className="container relative z-1 mx-auto px-4 md:px-8">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] flex animate-[bw-rise_0.8s_0.05s_both_ease] items-center gap-4">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
            Proof of Growth
          </span>
        </div>

        <h2
          id="bw-results-heading"
          className="mb-[clamp(3rem,6vw,5rem)] max-w-[15ch] animate-[bw-rise_0.8s_0.15s_both_ease] text-3xl lg:text-7xl md:text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-white"
        >
          Client <span className="italic text-primary font-serif">results</span> that speak
          for themselves.
        </h2>

        <div className="mb-[clamp(3rem,6vw,5rem)] grid animate-[bw-rise_0.8s_0.25s_both_ease] grid-cols-1 items-center gap-[clamp(1.5rem,4vw,3rem)] border border-gray bg-dark p-[clamp(1.5rem,4vw,2.75rem)] min-[701px]:grid-cols-[55fr_45fr]">
          <div className="relative aspect-video overflow-hidden bg-dark">
            <span className="absolute left-0 top-0 z-10 size-6 border-l-[1.5px] border-t-[1.5px] border-primary" />
            <span className="absolute bottom-0 right-0 z-10 size-6 border-b-[1.5px] border-r-[1.5px] border-primary" />

            <Image
              src="/images/creative.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 700px) 100vw, 55vw"
              priority={false}
            />
          </div>

          <div>
            <h3 className="mb-4 font-serif text-[clamp(1.4rem,3vw,2rem)] font-bold leading-[1.2] text-white">
              Community-led growth across niches — built to last.
            </h3>

            <p className="mb-8 text-[0.9375rem] leading-[1.8] text-gray">
              We don&apos;t chase unicorn metrics — we engineer zebra growth.
              Purpose-built strategies that compound over time, building
              authentic communities that convert and endure.
            </p>

            <div className="mb-8 grid grid-cols-3 gap-5 max-[480px]:grid-cols-2">
              <StatCard
                prefix="+"
                target={1001}
                suffix="%"
                label="Community growth"
                delay="0ms"
              />
              <StatCard target={6} label="Months to result" delay="100ms" />
              <StatCard
                target={3}
                suffix="×"
                label="Client retention"
                delay="200ms"
              />
            </div>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden border-[1.5px] border-primary px-7.5 py-3.25 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-primary transition-colors duration-300 ease-out hover:text-dark"
            >
              <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
              <span className="relative z-10">Start your growth story</span>
              <svg
                className="relative z-10 size-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.25"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mb-5 flex animate-[bw-rise_0.8s_0.35s_both_ease] items-center gap-6">
          <span className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gray">
            Trusted partners
          </span>
          <span className="h-px flex-1 bg-gray" />
        </div>

        <div className="grid animate-[bw-rise_0.8s_0.4s_both_ease] grid-cols-7 gap-px border border-gray bg-gray max-[900px]:grid-cols-4 max-[480px]:grid-cols-3">
          {clients.map((client, index) => (
            <LogoTile
              key={client.name}
              name={client.name}
              logo={client.logo}
              index={index}
            />
          ))}
        </div>

        <p className="mt-[clamp(2rem,4vw,3rem)] animate-[bw-rise_0.8s_0.5s_both_ease] text-center text-[0.8125rem] tracking-[0.04em] text-gray">
          We don&apos;t validate ideas — we accelerate those that have already{" "}
          <em className="italic text-gray">earned the right to grow.</em>
        </p>
      </div>
    </section>
  );
}
