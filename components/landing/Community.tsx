"use client"

import React, { useEffect, useRef, useState } from "react";

const GOOGLE_FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Sora:wght@300;400;600&display=swap');
`;

const STYLES = `
  .bw-proof-section {
    position: relative;
    padding: 7rem 0 6rem;
    background: #0A0907;
    overflow: hidden;
    font-family: 'Sora', sans-serif;
  }

  /* Grain texture */
  .bw-proof-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
    opacity: 0.6;
  }

  /* Ambient warm glow top-right */
  .bw-proof-section::after {
    content: '';
    position: absolute;
    top: -120px;
    right: -80px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 85, 30, 0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  .bw-proof-inner {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2.5rem;
  }

  /* ── Header ── */
  .bw-proof-header {
    margin-bottom: 5rem;
  }

  .bw-proof-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .bw-proof-eyebrow.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .bw-proof-eyebrow-line {
    display: block;
    width: 28px;
    height: 1px;
    background: #C85C2A;
  }
  .bw-proof-eyebrow-text {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #C85C2A;
  }

  .bw-proof-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: #F5EDE3;
    line-height: 1.15;
    max-width: 780px;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
  }
  .bw-proof-title.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .bw-proof-title em {
    font-style: italic;
    color: #C85C2A;
  }

  /* ── Stat Banner ── */
  .bw-stat-banner {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;
    padding: 1.25rem 1.75rem;
    border: 0.5px solid rgba(200, 92, 42, 0.25);
    border-radius: 2px;
    max-width: 480px;
    background: rgba(200, 92, 42, 0.06);
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
  }
  .bw-stat-banner.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .bw-stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 2.6rem;
    font-weight: 900;
    color: #E8A87C;
    line-height: 1;
    min-width: 90px;
  }
  .bw-stat-divider {
    width: 1px;
    height: 40px;
    background: rgba(200, 92, 42, 0.3);
    flex-shrink: 0;
  }
  .bw-stat-desc {
    font-size: 0.8rem;
    font-weight: 300;
    color: rgba(245, 237, 227, 0.7);
    line-height: 1.5;
  }
  .bw-stat-desc strong {
    display: block;
    font-weight: 600;
    color: #F5EDE3;
    margin-bottom: 2px;
    font-size: 0.85rem;
  }

  /* ── Grid ── */
  .bw-proof-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1px;
    background: rgba(255, 255, 255, 0.05);
    border: 0.5px solid rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 900px) {
    .bw-proof-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 600px) {
    .bw-proof-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .bw-community-card {
    position: relative;
    background: #0A0907;
    padding: 2rem 1.5rem;
    cursor: default;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      background 0.3s ease;
  }
  .bw-community-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .bw-community-card:hover {
    background: #111009;
  }

  /* Hover accent line */
  .bw-community-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #C85C2A;
    transition: width 0.35s ease;
  }
  .bw-community-card:hover::after {
    width: 100%;
  }

  .bw-card-number {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: rgba(200, 92, 42, 0.5);
    margin-bottom: 1.5rem;
    display: block;
  }

  .bw-card-icon {
    width: 36px;
    height: 36px;
    margin-bottom: 1.25rem;
    opacity: 0.85;
  }

  .bw-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #F5EDE3;
    margin-bottom: 0.4rem;
    line-height: 1.2;
  }

  .bw-card-label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(245, 237, 227, 0.35);
    margin-bottom: 1rem;
    display: block;
  }

  .bw-card-desc {
    font-size: 0.75rem;
    font-weight: 300;
    color: rgba(245, 237, 227, 0.5);
    line-height: 1.6;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
  }
  .bw-community-card:hover .bw-card-desc {
    max-height: 60px;
    opacity: 1;
  }

  /* ── Footer Line ── */
  .bw-proof-footer {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
  }
  .bw-proof-footer.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .bw-proof-footer-line {
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
  }
  .bw-proof-footer-text {
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    color: rgba(245, 237, 227, 0.3);
    text-transform: uppercase;
    white-space: nowrap;
  }
  .bw-proof-footer-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #C85C2A;
    flex-shrink: 0;
  }
`;

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
        className="bw-card-icon"
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
        className="bw-card-icon"
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
        className="bw-card-icon"
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
        className="bw-card-icon"
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
        className="bw-card-icon"
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
          // Stagger card reveals
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
      <style>{GOOGLE_FONTS}</style>
      <style>{STYLES}</style>
      <section className="bw-proof-section" ref={sectionRef}>
        <div className="bw-proof-inner">
          {/* ── Header ── */}
          <div className="bw-proof-header">
            <div className={`bw-proof-eyebrow ${visible ? "visible" : ""}`}>
              <span className="bw-proof-eyebrow-line" />
              <span className="bw-proof-eyebrow-text">Our Communities</span>
            </div>

            <h2 className={`bw-proof-title ${visible ? "visible" : ""}`}>
              We build communities of business owners contributing to Africa&apos;s{" "}
              <em>economic renaissance</em>
            </h2>

            <div className={`bw-stat-banner ${visible ? "visible" : ""}`}>
              <div className="bw-stat-number">{count.toLocaleString()}+</div>
              <div className="bw-stat-divider" />
              <div className="bw-stat-desc">
                <strong>Business Owners</strong>
                across fashion, tech, lifestyle, and beyond — growing with
                purpose.
              </div>
            </div>
          </div>

          {/* ── Community Cards ── */}
          <div className="bw-proof-grid">
            {communities.map((c, i) => (
              <div
                key={i}
                className={`bw-community-card ${cardVisible[i] ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className="bw-card-number">{c.number}</span>
                {c.icon}
                <div className="bw-card-title">{c.category}</div>
                <span className="bw-card-label">{c.label}</span>
                <p className="bw-card-desc">{c.description}</p>
              </div>
            ))}
          </div>

          {/* ── Footer ── */}
          <div className={`bw-proof-footer ${visible ? "visible" : ""}`}>
            <div className="bw-proof-footer-line" />
            <div className="bw-proof-footer-dot" />
            <span className="bw-proof-footer-text">
              Raising zebras — resilient, profitable, community-rooted
            </span>
            <div className="bw-proof-footer-dot" />
            <div className="bw-proof-footer-line" />
          </div>
        </div>
      </section>
    </>
  );
}
