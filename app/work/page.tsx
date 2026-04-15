import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import WorkCard from "@/components/WorkCard";

import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types";

export default async function WorkPage() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

  return (
    <div>
      <Header />
      <PageHeader title="Work" />

      <main className="min-h-screen bg-black px-4 py-24 md:px-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Selected Work
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-400">
              A collection of our recent projects and experiments.
            </p>
          </header>

          <div className="grid auto-rows-[300px] grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((project, index) => {
              const imageUrl = project.mainImage
                ? urlFor(project.mainImage).width(900).url()
                : "/fallback.jpg";

              let spanClass = "md:col-span-1 md:row-span-1";

              if (index % 4 === 0) {
                spanClass = "md:col-span-1 md:row-span-2";
              }

              return (
                <WorkCard
                  key={project._id}
                  image={imageUrl}
                  title={project.title}
                  category={project.category}
                  href={`/work/${project.slug.current}`}
                  className={spanClass}
                />
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
