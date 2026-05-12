"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { globalLocations } from "@/constants";

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const BW_UNITS = [
  { tag: "BW Media",      desc: "Digital properties & content" },
  { tag: "BW Labs",       desc: "AI + Data intelligence" },
  { tag: "BW Collective", desc: "Client-facing agency" },
  { tag: "BW Ventures",   desc: "Investment & incubation" },
  { tag: "BW Academy",    desc: "Community & education" },
];

const COMPANY_LINKS = [
  { name: "About",           href: "/about" },
  { name: "Solutions",       href: "/solutions" },
  { name: "Work",            href: "/work" },
  { name: "Recognition",     href: "/recognition" },
  { name: "News & Insights", href: "/news" },
  { name: "Careers",         href: "/careers" },
  { name: "AI & Technology", href: "/ai" },
  { name: "Contact",         href: "/contact" },
];

const RESOURCE_LINKS = [
  { name: "Product Scorecard",        href: "/resources/product-scorecard" },
  { name: "Profit Margin Calculator", href: "/resources/profit-margin-calculator" },
  { name: "Tax Calculator",           href: "/resources/tax-calculator" },
  { name: "Blog",                     href: "/blog" },
  { name: "Webinars",                 href: "/resources/webinars" },
  { name: "Partnerships",             href: "/partnerships" },
  { name: "Reviews",                  href: "/reviews" },
  { name: "Legal",                    href: "/legal" },
];

const SOCIAL_LINKS = [
  { icon: Facebook,  href: "https://www.facebook.com/bendingwaters",   label: "Facebook"  },
  { icon: Instagram, href: "https://www.instagram.com/bendingwaters/", label: "Instagram" },
  { icon: Twitter,   href: "#",                                         label: "Twitter"   },
  { icon: Linkedin,  href: "#",                                         label: "LinkedIn"  },
  { icon: Youtube,   href: "https://www.youtube.com/@bendingwaters",   label: "YouTube"   },
];

const PARTNER_CHIPS = [
  { name: "Google",        sub: "Premier Partner"  },
  { name: "Meta",          sub: "Business Partner" },
  { name: "Microsoft Ads", sub: "Select Partner"   },
  { name: "Amazon Ads",    sub: "Verified Partner" },
  { name: "NMSDC",         sub: "Certified"        },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

/* ─────────────────────────────────────────────
   Region accordion
───────────────────────────────────────────── */
function RegionAccordion({ region }: { region: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.07] pb-2 mb-1">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex justify-between items-center py-1.5 cursor-pointer bg-transparent border-none text-left"
      >
        <span
          className={`text-[0.78rem] transition-all duration-200 ${
            open
              ? "font-semibold text-np-grey"
              : "font-normal text-np-grey/55"
          }`}
        >
          {region.region}
        </span>
        {open ? (
          <Minus className="w-3 h-3 shrink-0 text-primary" />
        ) : (
          <Plus className="w-3 h-3 shrink-0 text-np-grey/18" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-3 pb-2 mt-1 space-y-1.5">
          {region.countries.map((country: any, idx: number) => (
            <div key={idx}>
              <Link
                href={country.link}
                className={`block text-[0.75rem] font-normal no-underline transition-colors duration-200 text-np-grey/55 hover:text-np-grey ${
                  country.name === "Nigeria"
                    ? "pl-2 border-l-2 border-primary"
                    : ""
                }`}
              >
                {country.name}
              </Link>
              {country.subItems && (
                <div className="pl-3 mt-1 space-y-0.5">
                  {country.subItems.map((sub: any, si: number) => (
                    <Link
                      key={si}
                      href={sub.link}
                      className="block text-[0.68rem] leading-[1.8] text-np-grey/30 no-underline transition-colors duration-200 hover:text-primary"
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
   Main Footer
───────────────────────────────────────────── */
const Footer = () => {
  const [fabVisible, setFabVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setFabVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="relative bg-dark text-np-grey overflow-hidden">

        {/* Ambient bottom-left terracotta glow */}
        <div className="absolute -bottom-24 -left-20 w-[350px] h-[350px]  rounded-full bg-[radial-gradient(circle,rgba(200,92,42,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10">

          {/* ── Top accent border ── */}
          <div className="relative h-px bg-white/[0.07]">
            <div className="absolute left-0 top-0 w-20 h-[2px] bg-primary" />
          </div>

          {/* ── Top bar: logo + tagline + unit pills ── */}
          <div className="border-b border-white/[0.07]">
            <div className="mx-auto px-12 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">

              {/* Logo + tagline */}
              <div>
                <Link href="/" className="block mb-4">
                  <div className="relative w-40 h-[42px]">
                    <Image
                      src="/images/logo.png"
                      alt="Bending Waters"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </Link>
                <p className="font-serif italic font-bold text-[clamp(1.1rem,2vw,1.5rem)] text-np-grey/35 leading-snug max-w-[440px]">
                  Bending what's possible,<br />without breaking what matters.
                </p>
              </div>

              {/* BW unit pills */}
              <div className="flex flex-wrap gap-2 max-w-[380px]">
                {BW_UNITS.map((unit) => (
                  <div
                    key={unit.tag}
                    className="flex flex-col gap-[2px] px-3.5 py-1.5 border-[0.5px] border-primary/18 rounded-[1px]"
                  >
                    <span className="text-[0.65rem] font-semibold tracking-[0.05em] text-primary">
                      {unit.tag}
                    </span>
                    <span className="text-[0.58rem] font-light text-np-grey/55">
                      {unit.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Main columns ── */}
          <div className=" mx-auto px-12 md:px-16 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

            {/* Col 1 — Contact */}
            <div>
              <h3 className="flex items-center gap-2 mb-5 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-primary">
                Contact
              </h3>
              <address className="not-italic text-[0.75rem] font-light leading-[1.9] text-np-grey/55">
                <p>House Suite 100, Rear</p>
                <p>Car Park Wing, 8 Opebi Rd</p>
                <p>Adebola, Ikeja 100281, Lagos</p>
                <Link
                  href="mailto:outreach@bendingwaters.africa"
                  className="block mt-3 font-normal no-underline text-primary transition-colors duration-200 hover:text-np-grey"
                >
                  outreach@bendingwaters.africa
                </Link>
              </address>
            </div>

            {/* Col 2 — Africa */}
            <div>
              <h3 className="flex items-center gap-2 mb-5 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-primary">
                Africa
              </h3>
              {globalLocations.map((region) => (
                <RegionAccordion key={region.region} region={region} />
              ))}
            </div>

            {/* Col 3 — Company */}
            <div>
              <h3 className="flex items-center gap-2 mb-5 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-primary">
                Company
              </h3>
              <ul className="list-none p-0 m-0">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block leading-loose text-[0.78rem] font-light text-np-grey/55 no-underline transition-colors duration-200 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Resources */}
            <div>
              <h3 className="flex items-center gap-2 mb-5 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-primary">
                Resources
              </h3>
              <ul className="list-none p-0 m-0">
                {RESOURCE_LINKS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block leading-loose text-[0.78rem] font-light text-np-grey/55 no-underline transition-colors duration-200 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5 — Follow Us */}
            <div>
              <h3 className="flex items-center gap-2 mb-5 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-primary">
                Follow Us
              </h3>
              <div className="flex flex-col gap-3.5">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 no-underline text-np-grey/55 transition-colors duration-200 hover:text-primary"
                  >
                    <Icon className="w-[15px] h-[15px] shrink-0" />
                    <span className="text-[0.75rem] font-light">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Legal bar ── */}
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="m-0 text-[0.65rem] font-light tracking-[0.04em] text-np-grey/25">
                © {new Date().getFullYear()} Bending Waters. All rights reserved. — Raising zebras.
              </p>
              <div className="flex items-center gap-6">
                {LEGAL_LINKS.map((label) => (
                  <Link
                    key={label}
                    href="/legal"
                    className="text-[0.63rem] font-light tracking-[0.04em] text-np-grey/25 no-underline transition-colors duration-200 hover:text-np-grey/55"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* ── Scroll-to-top FAB ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 w-[42px] h-[42px] bg-primary flex items-center justify-center border-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-secondary ${
          fabVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-[18px] h-[18px] text-white" />
      </button>
    </>
  );
};

export default Footer;