"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { navLinks, globalLocations } from "@/constants";
import { Search, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import { useModal } from "@/context/ModalContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const { openModal } = useModal();

  const { contextSafe } = useGSAP({ scope: menuRef });

  useGSAP(
    () => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(drawerRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      } else {
        document.body.style.overflow = "";
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
        gsap.to(drawerRef.current, {
          x: "-100%",
          duration: 0.5,
          ease: "power3.in",
        });
      }
      return () => {
        document.body.style.overflow = "";
      };
    },
    { scope: menuRef, dependencies: [isMenuOpen] }
  );

  return (
    <header className="fixed top-0 z-100 w-full bg-np-dark/80 backdrop-blur-md border-b border-white/5 p-4">
      <div className="container-custom flex items-center justify-between">
        {/* Logo & Global Dropdown */}
        <div className="relative group flex items-center h-full mr-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="flex items-center gap-1">
              <span className="text-neutral-500 text-xl font-light">/</span>
              <span className="text-np-orange text-lg">Global</span>
              <ChevronDown className="w-4 h-4 text-np-orange group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>

          {/* Global Dropdown */}
          <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[250px]">
            <div className="bg-[#111] border border-white/10 p-6 shadow-2xl">
              {globalLocations.map((region, idx) => (
                <div key={idx} className={idx > 0 ? "mt-6" : ""}>
                  <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider border-b border-white/20 pb-2">
                    {region.region}
                  </h3>
                  <ul className="space-y-4">
                    {region.countries.map((country, cIdx) => (
                      <li key={cIdx}>
                        <Link
                          href={country.link}
                          className={`font-medium text-sm flex items-center gap-2 transition-colors ${
                            country.name === "United States"
                              ? "text-np-orange hover:text-white"
                              : "text-white hover:text-np-orange"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-sm ${
                              country.name === "United States"
                                ? "bg-np-orange"
                                : "bg-neutral-500"
                            }`}
                          ></span>{" "}
                          {country.name}
                        </Link>
                        {country.subItems && (
                          <ul className="pl-4 mt-2 border-l border-white/10 ml-[3px]">
                            {country.subItems.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <Link
                                  href={sub.link}
                                  className="text-white text-xs hover:text-np-orange transition-colors block pl-3 underline decoration-white/30 underline-offset-4"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((nav) => (
            <div
              key={nav.name}
              className="h-full flex items-center group"
              onMouseEnter={() => nav.dropdown && setIsMenuOpen(false)} // Close mobile menu if open (edge case)
            >
              <Link
                href={nav.link}
                className="text-sm font-bold text-np-grey hover:text-np-orange transition-colors uppercase tracking-wide flex items-center gap-1"
              >
                {nav.name}
                {nav.dropdown && <ChevronRight className="w-3 h-3 rotate-90" />}
              </Link>

              {/* Desktop Dropdown */}
              {nav.dropdown && (
                <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 p-8">
                  <div className="container-custom grid grid-cols-4 gap-8">
                    {nav.dropdown.map((column, idx) => (
                      <div key={idx}>
                        <h3 className="text-white font-bold text-lg mb-4">
                          {column.title}
                        </h3>
                        <ul className="space-y-2">
                          {column.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href="#"
                                className="text-neutral-400 hover:text-np-orange text-sm transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button className="hidden md:flex items-center justify-center text-white">
            <Search className="w-5 h-5" />
          </button>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="hidden md:block bg-np-orange text-np-white px-4 py-2 text-sm font-bold rounded-sm  hover:bg-white  transition-colors uppercase"
          >
            Let&apos;s Talk
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-np-orange transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          ref={backdropRef}
          className="absolute inset-0 bg-black/80 opacity-0"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          ref={drawerRef}
          className="top-0 left-0 h-screen w-full bg-np-dark border-r border-white/10 -translate-x-full flex flex-col shadow-2xl"
        >
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <button
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="p-6 flex-1 overflow-y-auto no-scrollbar">
            {/* Search Input */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search Product..."
                className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-np-orange transition-colors"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((nav) => (
                <MobileNavItem
                  key={nav.name}
                  nav={nav}
                  setIsMenuOpen={setIsMenuOpen}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNavItem({
  nav,
  setIsMenuOpen,
}: {
  nav: any;
  setIsMenuOpen: (open: boolean) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (nav.dropdown) {
    return (
      <div className="flex flex-col">
        <div
          className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 text-white hover:text-np-orange transition-all cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="flex-1 text-base font-bold uppercase tracking-wide">
            {nav.name}
          </span>
          <div
            className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          >
            <ChevronRight className="w-4 h-4 rotate-90 text-neutral-500" />
          </div>
        </div>

        <div
          className={`pl-4 pr-2 space-y-4 border-l border-white/10 ml-4 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[1000px] opacity-100 mt-2 pb-4" : "max-h-0 opacity-0"}`}
        >
          {nav.dropdown.map((column: any, idx: number) => (
            <div key={idx}>
              <h4 className="text-np-orange text-sm font-bold mb-2 uppercase">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.items.map((item: string, i: number) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-neutral-400 text-sm hover:text-white block py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={nav.link}
      className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 text-white hover:text-np-orange transition-all cursor-pointer"
      onClick={() => setIsMenuOpen(false)}
    >
      <span className="flex-1 text-base font-bold uppercase tracking-wide">
        {nav.name}
      </span>
      <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-np-orange group-hover:text-black transition-all">
        <ChevronRight className="w-3 h-3" />
      </div>
    </Link>
  );
}
