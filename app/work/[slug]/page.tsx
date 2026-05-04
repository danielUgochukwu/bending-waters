import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";

export const revalidate = 60;

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <div className="text-white">Invalid slug</div>;
  }

  const project = await client.fetch<Project | null>(PROJECT_QUERY, { slug });

  if (!project) {
    return (
      <div className="bg-[#080808] flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-[#FF5500] text-xs tracking-[0.3em] uppercase font-bold mb-4">
            404
          </p>
          <h1 className="text-white font-black text-4xl mb-6 tracking-tight">
            Project Not Found
          </h1>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = project.mainImage
    ? urlFor(project.mainImage).width(1920).url()
    : null;

  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : null;

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      <Header />

      {/* ─── CINEMATIC HERO ──────────────────────────────── */}
      <div className="relative w-full h-[60vh] min-h-[480px] md:h-[80vh] overflow-hidden">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
            <div className="absolute inset-0 bg-[#080808]/20" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#111]" />
        )}

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF5500]/60 via-[#FF5500]/20 to-transparent" />

        {/* Back link */}
        <div className="absolute top-8 left-6 md:left-12 lg:left-16 z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            All Work
          </Link>
        </div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-12 md:pb-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              {project.category && (
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-[2px] bg-[#FF5500]" />
                  <span className="text-[#FF5500] text-xs font-bold tracking-[0.3em] uppercase">
                    {project.category}
                  </span>
                </div>
              )}
              <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.92]">
                {project.title}
              </h1>
            </div>

            {/* Ghost number */}
            <div className="text-white/[0.05] font-black text-8xl md:text-9xl leading-none select-none flex-shrink-0">
              01
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="w-16 h-[3px] bg-[#FF5500]" />
            <div className="w-3 h-[3px] bg-[#FF5500]/30" />
          </div>
        </div>
      </div>

      {/* ─── META STRIP ──────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="py-10 border-b border-[#1a1a1a] flex flex-wrap items-center gap-x-16 gap-y-6">
          {project.category && (
            <div>
              <p className="text-gray-600 text-[10px] tracking-[0.25em] uppercase font-bold mb-2">
                Discipline
              </p>
              <p className="text-white font-semibold text-sm">
                {project.category}
              </p>
            </div>
          )}
          {formattedDate && (
            <div>
              <p className="text-gray-600 text-[10px] tracking-[0.25em] uppercase font-bold mb-2">
                Published
              </p>
              <p className="text-white font-semibold text-sm">
                {formattedDate}
              </p>
            </div>
          )}
          <div className="md:ml-auto flex items-center gap-3">
            <div className="w-1 h-8 bg-[#FF5500]" />
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              A project by BendingWaters — delivering results through bold
              creative strategy.
            </p>
          </div>
        </div>
      </div>

      {/* ─── BODY CONTENT ────────────────────────────────── */}
      <main className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        {project.body ? (
          <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 xl:gap-28">
            {/* Rich text */}
            <div>
              <PortableText
                value={project.body}
                components={{
                  block: {
                    h1: ({ children }) => (
                      <h2 className="text-white font-black text-3xl md:text-4xl tracking-tight mt-12 mb-6 leading-tight">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }) => (
                      <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight mt-10 mb-5">
                        {children}
                      </h3>
                    ),
                    h3: ({ children }) => (
                      <h4 className="text-white font-bold text-xl mt-8 mb-4">
                        {children}
                      </h4>
                    ),
                    normal: ({ children }) => (
                      <p className="text-gray-400 text-base md:text-lg leading-[1.85] mb-6">
                        {children}
                      </p>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="relative my-10 pl-8">
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF5500]" />
                        <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed">
                          {children}
                        </p>
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="mb-6 space-y-3">{children}</ul>
                    ),
                    number: ({ children }) => (
                      <ol className="mb-6 space-y-3">{children}</ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="flex gap-4 text-gray-400 text-base md:text-lg leading-relaxed">
                        <span className="text-[#FF5500] font-bold flex-shrink-0 mt-0.5">
                          —
                        </span>
                        <span>{children}</span>
                      </li>
                    ),
                    number: ({ children }) => (
                      <li className="flex gap-4 text-gray-400 text-base md:text-lg leading-relaxed">
                        <span>{children}</span>
                      </li>
                    ),
                  },
                  marks: {
                    link: ({ children, value }) => {
                      const rel = !value.href.startsWith("/")
                        ? "noreferrer noopener"
                        : undefined;
                      return (
                        <a
                          href={value.href}
                          rel={rel}
                          className="text-[#FF5500] hover:text-white underline underline-offset-4 decoration-[#FF5500]/30 hover:decoration-white transition-colors"
                        >
                          {children}
                        </a>
                      );
                    },
                    strong: ({ children }) => (
                      <strong className="text-white font-bold">
                        {children}
                      </strong>
                    ),
                  },
                }}
              />
            </div>

            {/* Sticky sidebar — reuses the main image */}
            <div className="hidden lg:block">
              <div className="sticky top-12 space-y-6">
                {imageUrl && (
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 to-transparent" />
                  </div>
                )}
                {project.category && (
                  <div className="flex items-center gap-3 pt-2 border-t border-[#1a1a1a]">
                    <div className="w-3 h-3 bg-[#FF5500] rotate-45 flex-shrink-0" />
                    <span className="text-gray-500 text-xs tracking-[0.2em] uppercase font-medium">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* No body — full-width standalone image */
          imageUrl && (
            <div className="py-16">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )
        )}

        {/* ─── BOTTOM NAV ──────────────────────────────── */}
        <div className="py-14 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-gray-500 hover:text-white text-xs tracking-[0.25em] uppercase font-bold transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to All Work
          </Link>

          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-xs tracking-[0.2em] uppercase hidden sm:block">
              Ready to work with us?
            </p>
            <a
              href="/contact"
              className="group flex items-center gap-3 bg-[#FF5500] text-black px-6 py-3 font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white"
            >
              Get in Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
