import WorkCard from "@/components/WorkCard";

const projects = [
    {
        id: 1,
        title: "Paste Design Here",
        category: "Branding",
        image: "https://placehold.co/800x600/1eb81e/000000?text=Design", // Green placeholder
        href: "#",
    },
    {
        id: 2,
        title: "Moc Kup Tablet",
        category: "Web Design",
        image: "https://placehold.co/800x600/eeeeee/333333?text=Mockup", // White/Grey placeholder
        href: "#",
    },
    {
        id: 3,
        title: "Phone Mockup",
        category: "App Development",
        image: "https://placehold.co/800x600/333333/ffffff?text=App", // Dark placeholder
        href: "#",
    },
    {
        id: 4,
        title: "Mobile Interface",
        category: "UI/UX",
        image: "https://placehold.co/800x600/ff6b35/ffffff?text=15", // Orange placeholder
        href: "#",
    },
];

export default function WorkPage() {
    return (
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
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            category={project.category}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
