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
          if (progress < 1) rafRef.current = requestAnimationFrame(tick);
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

/* ─────────────────────────────────────────────────────────────────
   Stat card with animated counter
───────────────────────────────────────────────────────────────── */
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
    <div className="bw-stat-card" style={{ animationDelay: delay }}>
      <span ref={nodeRef} className="bw-stat-num">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="bw-stat-label">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Logo tile with hover reveal
───────────────────────────────────────────────────────────────── */
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
    <div className="bw-logo-tile" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="bw-logo-sweep" />
      <div className="bw-logo-inner">
        <Image src={logo} alt={name} fill className="object-contain" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────────────── */
const ClientResults = () => {
  const clients = [
    { name: "RefiJet", logo: "/images/client-1.png" },
    { name: "ZAGG", logo: "/images/client-2.png" },
    { name: "Adobe", logo: "/images/client-3.png" },
    { name: "Claire's", logo: "/images/client-4.png" },
    { name: "Universal Technical Institute", logo: "/images/client-5.png" },
    { name: "SoFi", logo: "/images/client-6.png" },
    { name: "CNN", logo: "/images/client-7.png" },
  ];

  return (
    <>
      {/* ── Scoped component styles ────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,700&family=Outfit:wght@400;500;600&display=swap');

        /* ── Brand tokens ── */
        :root {
          --bw-ink:      #090D10;
          --bw-ink-soft: #0F161C;
          --bw-border:   #18242D;
          --bw-gold:     #C9A84C;
          --bw-mist:     #7A99A8;
          --bw-chalk:    #EDE8DF;
          --bw-water:    #0A1F2E;
        }

        /* ── Section shell ── */
        .bw-section {
          position: relative;
          width: 100%;
          background: var(--bw-ink);
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
          padding: clamp(5rem, 10vw, 8rem) 0;
        }

        /* Giant italic watermark */
        .bw-watermark {
          position: absolute;
          top: -0.08em;
          right: -0.04em;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(18rem, 34vw, 34rem);
          font-weight: 700;
          font-style: italic;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--bw-water);
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        /* ── Eyebrow ── */
        .bw-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          animation: bw-rise 0.8s 0.05s both ease;
        }
        .bw-rule {
          display: block;
          width: 2.5rem;
          height: 1.5px;
          background: var(--bw-gold);
          flex-shrink: 0;
        }
        .bw-eyebrow-text {
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--bw-gold);
          font-weight: 600;
        }

        /* ── Headline ── */
        .bw-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.75rem, 7vw, 5.5rem);
          font-weight: 700;
          color: var(--bw-chalk);
          line-height: 1.05;
          letter-spacing: -0.02em;
          max-width: 15ch;
          margin-bottom: clamp(3rem, 6vw, 5rem);
          animation: bw-rise 0.8s 0.15s both ease;
        }
        .bw-headline em {
          font-style: italic;
          color: var(--bw-gold);
        }

        /* ── Case study card ── */
        .bw-case {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: center;
          background: var(--bw-ink-soft);
          border: 1px solid var(--bw-border);
          padding: clamp(1.5rem, 4vw, 2.75rem);
          margin-bottom: clamp(3rem, 6vw, 5rem);
          animation: bw-rise 0.8s 0.25s both ease;
        }
        @media (max-width: 700px) {
          .bw-case { grid-template-columns: 1fr; }
        }

        /* Image pane */
        .bw-img-wrap {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--bw-water);
        }
        .bw-img-corner {
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          z-index: 2;
        }
        .bw-img-corner--tl {
          top: 0; left: 0;
          border-top: 1.5px solid var(--bw-gold);
          border-left: 1.5px solid var(--bw-gold);
        }
        .bw-img-corner--br {
          bottom: 0; right: 0;
          border-bottom: 1.5px solid var(--bw-gold);
          border-right: 1.5px solid var(--bw-gold);
        }

        /* Content pane */
        .bw-badge {
          display: inline-block;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bw-ink);
          background: var(--bw-gold);
          padding: 0.3rem 1rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .bw-case-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--bw-chalk);
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .bw-case-body {
          font-size: 0.9375rem;
          line-height: 1.8;
          color: var(--bw-mist);
          margin-bottom: 2rem;
        }

        /* ── Stats row ── */
        .bw-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        @media (max-width: 480px) {
          .bw-stats { grid-template-columns: 1fr 1fr; }
        }
        .bw-stat-card {
          border-left: 2px solid var(--bw-gold);
          padding-left: 1rem;
          animation: bw-rise 0.6s both ease;
        }
        .bw-stat-num {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.75rem, 4vw, 2.6rem);
          font-weight: 700;
          color: var(--bw-gold);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .bw-stat-label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--bw-mist);
          margin-top: 0.45rem;
          font-weight: 500;
        }

        /* ── CTA button ── */
        .bw-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.8125rem 1.875rem;
          border: 1.5px solid var(--bw-gold);
          color: var(--bw-gold);
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: color 0.38s ease;
        }
        .bw-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--bw-gold);
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .bw-cta:hover::before { transform: translateX(0); }
        .bw-cta:hover { color: var(--bw-ink); }
        .bw-cta-inner { position: relative; z-index: 1; }
        .bw-cta-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .bw-cta:hover .bw-cta-arrow { transform: translateX(5px); }

        /* ── Logos section ── */
        .bw-logos-eyebrow {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          animation: bw-rise 0.8s 0.35s both ease;
        }
        .bw-logos-eyebrow-text {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bw-mist);
          white-space: nowrap;
          font-weight: 500;
        }
        .bw-logos-rule {
          flex: 1;
          height: 1px;
          background: var(--bw-border);
        }

        .bw-logo-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 1px;
          background: var(--bw-border);
          border: 1px solid var(--bw-border);
          animation: bw-rise 0.8s 0.4s both ease;
        }
        @media (max-width: 900px) { .bw-logo-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 480px) { .bw-logo-grid { grid-template-columns: repeat(3, 1fr); } }

        .bw-logo-tile {
          aspect-ratio: 1;
          position: relative;
          background: #10181F;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          overflow: hidden;
          transition: background 0.35s ease;
          cursor: pointer;
        }
        .bw-logo-tile:hover { background: var(--bw-water); }

        .bw-logo-sweep {
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, var(--bw-gold), transparent);
          transition: width 0.4s ease;
          z-index: 2;
        }
        .bw-logo-tile:hover .bw-logo-sweep { width: 100%; }

        .bw-logo-inner {
          position: relative;
          width: 100%; height: 100%;
          filter: grayscale(1) brightness(0.45);
          transition: filter 0.35s ease;
        }
        .bw-logo-tile:hover .bw-logo-inner { filter: grayscale(0) brightness(1); }

        /* ── Footer note ── */
        .bw-footer-note {
          margin-top: clamp(2rem, 4vw, 3rem);
          font-size: 0.8125rem;
          color: #2C3E4A;
          letter-spacing: 0.04em;
          text-align: center;
          animation: bw-rise 0.8s 0.5s both ease;
        }
        .bw-footer-note em { color: var(--bw-mist); font-style: italic; }

        /* ── Shared keyframe ── */
        @keyframes bw-rise {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="bw-section" aria-labelledby="bw-results-heading">
        {/* Giant italic watermark */}
        <span className="bw-watermark" aria-hidden="true">01</span>

        <div
          className="container mx-auto px-4 md:px-8"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* ── Eyebrow ─────────────────────────────────────────── */}
          <div className="bw-eyebrow">
            <span className="bw-rule" />
            <span className="bw-eyebrow-text">Proof of Growth</span>
          </div>

          {/* ── Headline ────────────────────────────────────────── */}
          <h2 id="bw-results-heading" className="bw-headline">
            Client <em>results</em> that speak for themselves.
          </h2>

          {/* ── Case study card ─────────────────────────────────── */}
          <div className="bw-case">
            {/* Image */}
            <div className="bw-img-wrap">
              <span className="bw-img-corner bw-img-corner--tl" />
              <span className="bw-img-corner bw-img-corner--br" />
              <Image
                src="/images/creative.png"
                alt="RefiJet community growth campaign"
                fill
                className="object-cover"
                sizes="(max-width: 700px) 100vw, 55vw"
              />
            </div>

            {/* Content */}
            <div>

              <h3 className="bw-case-title">
                Community-led growth across niches — built to last.
              </h3>

              <p className="bw-case-body">
                We don't chase unicorn metrics — we engineer zebra growth.
                Purpose-built strategies that compound over time, building
                authentic communities that convert and endure.
              </p>

              {/* Animated stats */}
              <div className="bw-stats">
                <StatCard
                  prefix="+"
                  target={1001}
                  suffix="%"
                  label="Community growth"
                  delay="0ms"
                />
                <StatCard
                  target={6}
                  label="Months to result"
                  delay="100ms"
                />
                <StatCard
                  target={3}
                  suffix="×"
                  label="Client retention"
                  delay="200ms"
                />
              </div>

              {/* CTA */}
              <Link href="/contact" className="bw-cta">
                <span className="bw-cta-inner">Start your growth story</span>
                <svg
                  className="bw-cta-arrow"
                  width="14"
                  height="14"
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

          {/* ── Trusted partners divider ────────────────────────── */}
          <div className="bw-logos-eyebrow">
            <span className="bw-logos-eyebrow-text">Trusted partners</span>
            <span className="bw-logos-rule" />
          </div>

          {/* ── Logo grid ───────────────────────────────────────── */}
          <div className="bw-logo-grid">
            {clients.map((client, index) => (
              <LogoTile
                key={index}
                name={client.name}
                logo={client.logo}
                index={index}
              />
            ))}
          </div>

          {/* ── Brand philosophy note ───────────────────────────── */}
          <p className="bw-footer-note">
            We don't validate ideas — we accelerate those that have already{" "}
            <em>earned the right to grow.</em>
          </p>
        </div>
      </section>
    </>
  );
};

export default ClientResults;