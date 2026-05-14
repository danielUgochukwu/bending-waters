"use client";

// File: app/contact/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "./_components/ContactHero";
import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Header />

      {/* ── Page banner ───────────────────────────────────────────── */}
      <section className="w-full border-b border-gray-100 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Breadcrumb */}
            <span className="text-xs font-medium text-gray-800 tracking-widest uppercase">
              BendingWaters
            </span>
            <span className="text-gray-200">—</span>
            <span className="text-xs font-medium text-[#0F0F0F] tracking-widest uppercase">
              Contact
            </span>
          </div>
          {/* Animated zebra stripe bar */}
          <div className="hidden sm:flex items-center gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{ animationDelay: `${i * 80}ms` }}
                className={`h-4 w-[3px] rounded-full animate-pulse ${
                  i % 2 === 0 ? "bg-[#0F0F0F]" : "bg-primary"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────── */}
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
            {/* Left: Hero / info */}
            <ContactHero />

            {/* Right: Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm">
              {/* Form header */}
              <div className="mb-10 pb-8 border-b border-gray-100 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">
                    New inquiry
                  </p>
                  <h2 className="text-xl font-bold text-[#0F0F0F]">
                    Start a conversation
                  </h2>
                </div>
                {/* Step indicator */}
                <div className="flex items-center gap-1.5 mt-1 shrink-0">
                  <div className="w-6 h-1.5 rounded-full bg-primary" />
                  <div className="w-3 h-1.5 rounded-full bg-gray-200" />
                  <div className="w-3 h-1.5 rounded-full bg-gray-500" />
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
