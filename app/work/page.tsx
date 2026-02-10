import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import WorkCard from "@/components/WorkCard";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// ... existing imports

interface Project {
    _id: string;
    title: string;
    category: string;
    slug: { current: string };
    mainImage: SanityImageSource;
}

async function getProjects() {
    const query = `*[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    category,
    slug,
    mainImage
  }`;
    return client.fetch(query);
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function WorkPage() {
    const projects: Project[] = await getProjects();

    return (
        <div>
            <PageHeader title="Work" />
            <main className="min-h-screen bg-black px-4 py-24 md:px-8 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-16">
                        <h1 className="text-4xl font-bold text-white md:text-6xl">Selected Work</h1>
                        <p className="mt-4 max-w-xl text-lg text-gray-400">
                            A collection of our recent projects and experiments.
                        </p>
                    </header>

                    <div className="grid gap-8 sm:grid-cols-2">
                        {projects.map((project) => (
                            <WorkCard
                                key={project._id}
                                image={project.mainImage ? urlFor(project.mainImage).width(800).height(600).url() : "/images/project.jpg"}
                                title={project.title}
                                category={project.category}
                                href={`/work/${project.slug.current}`}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
