import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import WorkCard from "@/components/WorkCard";
import { MOCK_PROJECTS } from "@/constants/mock-projects";

export default function WorkPage() {
    // Use mock data directly since Sanity fetch is removed/commented out for now
    const projects = MOCK_PROJECTS;

    return (
        <div>
            <PageHeader title="Work" />
            <main className="min-h-screen bg-black px-4 py-24 md:px-8 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <header className="mb-16">
                        <h1 className="text-4xl font-bold text-white md:text-6xl">Selected Work</h1>
                        <p className="mt-4 max-w-xl text-lg text-gray-400">
                            A collection of our recent projects and experiments.
                        </p>
                    </header>

                    <div className="grid auto-rows-[300px] grid-cols-1 gap-y-4 gap-x-8 md:grid-cols-3">
                        {projects.map((project, index) => {
                            // Determine the span based on index for a bento grid effect
                            let spanClass = "md:col-span-1 md:row-span-1";

                            // Every 4th item starting from index 0 is large (2x2)
                            // Index 0 -> 2x2
                            // Index 4 -> 2x2
                            if (index % 4 === 0) {
                                spanClass = "md:col-span-1 md:row-span-2";
                            }
                            // Every 4th item starting from index 3 is wide (2x1)
                            // Index 3 -> 2x1
                            // Index 7 -> 2x1


                            return (
                                <WorkCard
                                    key={project._id}
                                    image={project.image}
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

