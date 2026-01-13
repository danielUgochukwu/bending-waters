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
import { useState } from "react";
import { globalLocations } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Logo & Contact */}
          <div className="space-y-6">
            <Link href="/" className="block w-32 md:w-40 relative h-10">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </Link>
            <div className="text-neutral-400 text-sm space-y-2">
              <p>House Suite 100, Rear, Car Park Wing, 8 </p>
              <p>Opebi Rd, Adebola, Ikeja 100281, Lagos</p>
              <p className="pt-2">askbendingwaters@gmail.com</p>
            </div>
          </div>

          {/* Column 2: GLOBAL */}
          <div>
            <h3 className="font-bold mb-6 tracking-wider text-sm uppercase">
              Global
            </h3>
            <div className="space-y-4">
              {globalLocations.map((region) => (
                <GlobalRegion key={region.region} region={region} />
              ))}
            </div>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h3 className="font-bold mb-6 tracking-wider text-sm uppercase">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              {[
                { name: "About", link: "/about" },
                { name: "Solutions", link: "/solutions" },
                { name: "Work", link: "/work" },
                { name: "Recognition", link: "/recognition" },
                { name: "News & Insights", link: "/news" },
                { name: "Careers", link: "/careers" },
                { name: "AI & Technology", link: "/ai" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-np-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div>
            <h3 className="font-bold mb-6 tracking-wider text-sm uppercase">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              {[
                { name: "Product Scorecard", link: "/resources/product-scorecard" },
                { name: "Profit Margin Calculator", link: "/resources/profit-margin-calculator" },
                { name: "Tax Calculator", link: "/resources/tax-calculator" },
                { name: "Blog", link: "/blog" },
                { name: "Webinars", link: "/resources/webinars" },
                { name: "Partnerships", link: "/partnerships" },
                { name: "Reviews", link: "/reviews" },
                { name: "Legal", link: "/legal" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-np-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: SOCIAL */}
          <div>
            <h3 className="font-bold mb-6 tracking-wider text-sm uppercase">
              Social
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Partner Logos */}
        <div className="border-t border-neutral-800 pt-12 pb-8 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70">
          {/* Using text placeholders styled to look like logos as requested/implied by "generic placeholders" if assets missing, 
                but I'll try to make them look distinct or just use text for now as I don't have these specific SVGs in the file list.
                The user asked to change the NP Digital logo to the one in public folder, which I did above.
                For these bottom logos, I'll use styled text blocks to simulate the look.
            */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-white">Google</h4>
            <p className="text-[10px] tracking-widest uppercase text-neutral-400">
              Premier Partner
            </p>
          </div>
          <div className="text-center flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-lg">
              ∞
            </div>
            <div className="text-left">
              <h4 className="text-lg font-bold text-white leading-none">
                Meta
              </h4>
              <p className="text-[10px] text-neutral-400">Business Partner</p>
            </div>
          </div>
          <div className="text-center border border-white/20 p-2 px-4">
            <p className="text-xs text-neutral-400">Microsoft Advertising</p>
            <p className="text-sm font-bold text-white">Select Partner</p>
            <p className="text-[10px] text-neutral-500 rotate-90 absolute -right-2 top-2">
              2025
            </p>
          </div>
          <div className="text-center border border-white p-2 px-3">
            <h4 className="text-lg font-bold text-white leading-none">
              amazon ads
            </h4>
            <p className="text-[10px] uppercase font-bold text-white mt-1">
              Verified partner
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto border-4 border-white rounded-full flex items-center justify-center mb-1">
              <span className="text-xs font-bold">NMSDC</span>
            </div>
            <p className="text-[8px] uppercase tracking-widest text-neutral-400">
              Certified
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-8 right-8 bg-np-orange hover:bg-orange-600 text-white p-3 rounded shadow-lg transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;

function GlobalRegion({ region }: { region: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-800 pb-2">
      <div
        className="flex justify-between items-center cursor-pointer group hover:text-np-orange transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-sm font-medium transition-colors ${isOpen ? "text-white" : "text-neutral-400 group-hover:text-white"
            }`}
        >
          {region.region}
        </span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-white" />
        ) : (
          <Plus className="w-4 h-4 text-neutral-400 group-hover:text-white" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
      >
        <div className="pl-4 space-y-2 text-sm text-neutral-400 pb-2">
          {region.countries.map((country: any, idx: number) => (
            <div key={idx}>
              <Link
                href={country.link}
                className={`block transition-colors ${country.name === "United States"
                  ? "text-white font-medium border-l-2 border-np-orange pl-2"
                  : "hover:text-white"
                  }`}
              >
                {country.name}
              </Link>
              {country.subItems && (
                <div className="pl-4 mt-1 space-y-1">
                  {country.subItems.map((sub: any, sIdx: number) => (
                    <Link
                      key={sIdx}
                      href={sub.link}
                      className="block text-xs hover:text-np-orange transition-colors"
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
