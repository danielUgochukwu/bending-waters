"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Plus,
  Minus,
  ArrowUp,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { globalLocations } from "@/constants";

/* ─────────────────────────────────────────────
   Design tokens — matches SocialProof.tsx
───────────────────────────────────────────── */
const BW = {
  bg: "#0A0907",
  bgSurface: "#0F0D0A",
  terracotta: "#C85C2A",
  terracottaMid: "#E8A87C",
  cream: "#F5EDE3",
  creamMuted: "rgba(245,237,227,0.55)",
  creamFaint: "rgba(245,237,227,0.18)",
  border: "rgba(255,255,255,0.07)",
  borderWarm: "rgba(200,92,42,0.18)",
};

/* ─────────────────────────────────────────────
   BW Business Units — from the business model
───────────────────────────────────────────── */
const BW_UNITS = [
  { tag: "BW Media", desc: "Digital properties & content" },
  { tag: "BW Labs", desc: "AI + Data intelligence" },
  { tag: "BW Collective", desc: "Client-facing agency" },
  { tag: "BW Ventures", desc: "Investment & incubation" },
  { tag: "BW Academy", desc: "Community & education" },
];

const COMPANY_LINKS = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Work", href: "/work" },
  { name: "Recognition", href: "/recognition" },
  { name: "News & Insights", href: "/news" },
  { name: "Careers", href: "/careers" },
  { name: "AI & Technology", href: "/ai" },
  { name: "Contact", href: "/contact" },
];

const RESOURCE_LINKS = [
  { name: "Product Scorecard", href: "/resources/product-scorecard" },
  {
    name: "Profit Margin Calculator",
    href: "/resources/profit-margin-calculator",
  },
  { name: "Tax Calculator", href: "/resources/tax-calculator" },
  { name: "Blog", href: "/blog" },
  { name: "Webinars", href: "/resources/webinars" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Reviews", href: "/reviews" },
  { name: "Legal", href: "/legal" },
];

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/bendingwaters",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/bendingwaters/",
    label: "Instagram",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@bendingwaters",
    label: "YouTube",
  },
];

/* ─────────────────────────────────────────────
   Partner chip component
───────────────────────────────────────────── */
function PartnerChip({ name, sub }: { name: string; sub: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        padding: "0.6rem 1.2rem",
        border: `0.5px solid ${BW.border}`,
        minWidth: "100px",
      }}
    >
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: BW.cream,
          letterSpacing: "0.02em",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 300,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: BW.creamMuted,
        }}
      >
        {sub}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Accordion region for Africa locations
───────────────────────────────────────────── */
function RegionAccordion({ region }: { region: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: `0.5px solid ${BW.border}`,
        paddingBottom: "0.5rem",
        marginBottom: "0.25rem",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.4rem 0",
          color: open ? BW.cream : BW.creamMuted,
          transition: "color 0.2s",
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "0.78rem",
            fontWeight: open ? 600 : 400,
            transition: "font-weight 0.2s",
          }}
        >
          {region.region}
        </span>
        {open ? (
          <Minus style={{ width: 13, height: 13, color: BW.terracotta }} />
        ) : (
          <Plus style={{ width: 13, height: 13, color: BW.creamFaint }} />
        )}
      </button>

      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          style={{
            paddingLeft: "0.75rem",
            paddingBottom: "0.5rem",
            marginTop: "0.25rem",
          }}
        >
          {region.countries.map((country: any, idx: number) => (
            <div key={idx} style={{ marginBottom: "0.35rem" }}>
              <Link
                href={country.link}
                style={{
                  display: "block",
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: BW.creamMuted,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  paddingLeft: country.name === "Nigeria" ? "0.5rem" : "0",
                  borderLeft:
                    country.name === "Nigeria"
                      ? `2px solid ${BW.terracotta}`
                      : "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = BW.cream;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    BW.creamMuted;
                }}
              >
                {country.name}
              </Link>
              {country.subItems && (
                <div style={{ paddingLeft: "0.75rem", marginTop: "0.2rem" }}>
                  {country.subItems.map((sub: any, si: number) => (
                    <Link
                      key={si}
                      href={sub.link}
                      style={{
                        display: "block",
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "0.68rem",
                        color: "rgba(245,237,227,0.3)",
                        textDecoration: "none",
                        lineHeight: 1.8,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          BW.terracotta;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(245,237,227,0.3)";
                      }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Nav link helper
───────────────────────────────────────────── */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.78rem",
          fontWeight: 300,
          color: BW.creamMuted,
          textDecoration: "none",
          lineHeight: "2",
          display: "inline-block",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = BW.terracottaMid;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = BW.creamMuted;
        }}
      >
        {children}
      </Link>
    </li>
  );
}

/* ─────────────────────────────────────────────
   Column heading
───────────────────────────────────────────── */
function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: "0.6rem",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: BW.terracotta,
        marginBottom: "1.25rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "16px",
          height: "1px",
          background: BW.terracotta,
          opacity: 0.6,
          flexShrink: 0,
        }}
      />
      {children}
    </h3>
  );
}

/* ─────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────── */
const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFabVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Google Fonts — same as SocialProof */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Sora:wght@300;400;600&display=swap');
      `}</style>

      <footer
        style={{
          background: BW.bg,
          color: BW.cream,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            pointerEvents: "none",
            zIndex: 1,
            opacity: 0.5,
          }}
        />

        {/* Ambient bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(200,92,42,0.08) 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* ── Top border with terracotta accent ── */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              height: "1px",
              background: BW.border,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "80px",
                height: "2px",
                background: BW.terracotta,
              }}
            />
          </div>
        </div>

        {/* ── Editorial marquee headline ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            borderBottom: `0.5px solid ${BW.border}`,
            padding: "3rem 0 2.5rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2.5rem",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {/* Logo + tagline */}
            <div>
              <Link href="/" style={{ display: "block", marginBottom: "1rem" }}>
                <div
                  style={{
                    position: "relative",
                    width: "160px",
                    height: "42px",
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Bending Waters"
                    fill
                    style={{ objectFit: "contain", objectPosition: "left" }}
                  />
                </div>
              </Link>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 700,
                  color: "rgba(245,237,227,0.35)",
                  lineHeight: 1.2,
                  maxWidth: "440px",
                }}
              >
                Bending what's possible, without breaking what matters.
              </p>
            </div>

            {/* Business units — pill tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                maxWidth: "380px",
              }}
            >
              {BW_UNITS.map((unit) => (
                <div
                  key={unit.tag}
                  style={{
                    padding: "0.35rem 0.85rem",
                    border: `0.5px solid ${BW.borderWarm}`,
                    borderRadius: "1px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: BW.terracottaMid,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {unit.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.58rem",
                      fontWeight: 300,
                      color: BW.creamMuted,
                    }}
                  >
                    {unit.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main columns ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3rem 2.5rem 2.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Col 1: Contact */}
          <div>
            <ColHead>Contact</ColHead>
            <address
              style={{
                fontStyle: "normal",
                fontFamily: "'Sora', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 300,
                color: BW.creamMuted,
                lineHeight: 1.9,
              }}
            >
              <p>House Suite 100, Rear</p>
              <p>Car Park Wing, 8 Opebi Rd</p>
              <p>Adebola, Ikeja 100281, Lagos</p>
              <a
                href="mailto:outreach@bendingwaters.africa"
                style={{
                  display: "block",
                  marginTop: "0.75rem",
                  color: BW.terracottaMid,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = BW.cream;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    BW.terracottaMid;
                }}
              >
                outreach@bendingwaters.africa
              </a>
            </address>
          </div>

          {/* Col 2: Africa locations */}
          <div>
            <ColHead>Africa</ColHead>
            <div>
              {globalLocations.map((region) => (
                <RegionAccordion key={region.region} region={region} />
              ))}
            </div>
          </div>

          {/* Col 3: Company */}
          <div>
            <ColHead>Company</ColHead>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {COMPANY_LINKS.map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <ColHead>Resources</ColHead>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {RESOURCE_LINKS.map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 5: Social */}
          <div>
            <ColHead>Follow Us</ColHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    color: BW.creamMuted,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = BW.terracottaMid;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = BW.creamMuted;
                  }}
                >
                  <Icon style={{ width: 15, height: 15, flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 300,
                    }}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Partner logos strip ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            borderTop: `0.5px solid ${BW.border}`,
            borderBottom: `0.5px solid ${BW.border}`,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "1.75rem 2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0",
              flexWrap: "wrap",
              opacity: 0.65,
            }}
          >
            <PartnerChip name="Google" sub="Premier Partner" />
            <PartnerChip name="Meta" sub="Business Partner" />
            <PartnerChip name="Microsoft Ads" sub="Select Partner" />
            <PartnerChip name="Amazon Ads" sub="Verified Partner" />
            <PartnerChip name="NMSDC" sub="Certified" />
          </div>
        </div>

        {/* ── Legal base ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1.25rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 300,
              color: "rgba(245,237,227,0.25)",
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Bending Waters. All rights reserved. —
            Raising zebras.
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
              <Link
                key={t}
                href="/legal"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "0.63rem",
                  fontWeight: 300,
                  color: "rgba(245,237,227,0.25)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    BW.creamMuted;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(245,237,227,0.25)";
                }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Scroll-to-top FAB ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 50,
          width: "42px",
          height: "42px",
          background: BW.terracotta,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: fabVisible ? 1 : 0,
          transform: fabVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s",
          pointerEvents: fabVisible ? "auto" : "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#A8481E";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            BW.terracotta;
        }}
      >
        <ArrowUp style={{ width: 18, height: 18, color: "#fff" }} />
      </button>
    </>
  );
};

export default Footer;
