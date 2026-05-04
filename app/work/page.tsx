import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import WorkCard from "@/components/WorkCard";

import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/types";

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

  return (
    <div className="min-h-screen bg-[#080808]">
      <Header />
      <PageHeader title="Our Work" />

      <main className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-16">
        {/* Intro */}
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-[#1a1a1a] pb-10 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#FF5500]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF5500]">
                Selected Projects
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white md:text-5xl">
              Work That
              <br />
              <span className="text-gray-600">Moves People</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 md:text-right">
            A curated selection of campaigns, brands, and digital experiences.
          </p>
        </div>

        {/* Count */}
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-700">
            {projects.length} Projects
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-700">
            All Disciplines
          </span>
        </div>

        {/* Grid */}
        <div className="grid auto-rows-[360px] grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project, index) => {
            const slug = project.slug?.current;

            // 🛑 Prevent crash if slug is missing
            if (!slug) return null;

            const imageUrl = project.mainImage
              ? urlFor(project.mainImage).width(1200).quality(85).url()
              : "/fallback.jpg";

            let spanClass = "md:col-span-1 md:row-span-1";

            if (index % 5 === 0) {
              spanClass = "md:row-span-2";
            } else if (index % 5 === 3) {
              spanClass = "md:col-span-2";
            }

            return (
              <WorkCard
                key={project._id}
                image={imageUrl}
                title={project.title}
                category={project.category}
                href={`/work/${slug}`}
                index={index}
                className={spanClass}
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-[#1a1a1a] pt-16 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-600">
              Ready to start?
            </p>
            <h3 className="text-3xl font-black text-white md:text-4xl">
              Let&apos;s build something great.
            </h3>
          </div>

          <a
            href="/contact"
            className="group flex items-center gap-4 bg-[#FF5500] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
          >
            Start a Project →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
