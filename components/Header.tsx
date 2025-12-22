"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "@/constants";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

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
    <header className="fixed top-0 z-100 w-full bg-np-dark/80 backdrop-blur-md border-b border-white/5 px-4">
      <div className="container-custom flex h-24 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="text-3xl font-bold text-np-orange">Bending</div>
          <span className="text-3xl font-bold text-white group-hover:text-gray-300 transition-colors">
            Waters
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.link}
              className="text-sm font-bold text-np-grey hover:text-np-orange transition-colors uppercase tracking-wide"
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* CTA Button */}
          <Link
            href="#"
            className="hidden md:block bg-np-orange text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors uppercase"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-np-orange transition-colors"
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
          className="top-0 left-0 h-screen w-[320px] bg-np-dark border-r border-white/10 -translate-x-full flex flex-col shadow-2xl"
        >
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <Link href="/" className="flex items-center gap-1">
              <div className="text-3xl font-bold text-np-orange">Bending</div>
              <span className="text-3xl font-bold text-white">Waters</span>
            </Link>
            <button
              className="text-gray-400 hover:text-white transition-colors"
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
                <Link
                  key={nav.name}
                  href={nav.link}
                  className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 text-white hover:text-np-orange transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-base font-bold uppercase tracking-wide">
                    {nav.name}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-np-orange group-hover:text-black transition-all">
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
