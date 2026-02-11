
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Project {
    _id: string;
    title: string;
    category: string;
    slug: { current: string };
    mainImage: SanityImageSource | string;
    publishedAt: string;
    body: any; // BlockContent
}

const MOCK_PROJECT: Project = {
    _id: "mock-1",
    title: "Neon Horizon",
    category: "Brand Identity",
    slug: { current: "neon-horizon" },
    mainImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    publishedAt: new Date().toISOString(),
    body: [
        {
            _key: "1",
            _type: "block",
            style: "normal",
            children: [
                {
                    _key: "1a",
                    _type: "span",
                    text: "This is a preview of how the project details will look. Since we haven't added real data to Sanity yet, we're using this mock content to demonstrate the layout and typography.",
                },
            ],
            markDefs: [],
        },
        {
            _key: "2",
            _type: "block",
            style: "h2",
            children: [{ _key: "2a", _type: "span", text: "The Challenge" }],
            markDefs: [],
        },
        {
            _key: "3",
            _type: "block",
            style: "normal",
            children: [
                {
                    _key: "3a",
                    _type: "span",
                    text: "We wanted to create a visual identity that captures the essence of futuristic urban landscapes. The interplay of light and shadow was crucial to the design system.",
                },
            ],
            markDefs: [],
        },
        {
            _key: "4",
            _type: "block",
            style: "blockquote",
            children: [
                {
                    _key: "4a",
                    _type: "span",
                    text: "Design is not just what it looks like and feels like. Design is how it works.",
                },
            ],
            markDefs: [],
        },
        {
            _key: "5",
            _type: "block",
            style: "normal",
            children: [
                {
                    _key: "5a",
                    _type: "span",
                    text: "Using a monochromatic color palette with striking neon accents, we achieved a balance between valid minimalism and maximum impact.",
                },
            ],
            markDefs: [],
        },
    ],
};

// 1. Generate Static Params for SSG/ISR
export async function generateStaticParams() {
    const query = `*[_type == "project"]{ "slug": slug.current }`;
    const projects = await client.fetch(query);

    return projects.map((project: { slug: string }) => ({
        slug: project.slug,
    }));
}

// 2. Fetch Single Project Data
async function getProject(slug: string) {
    const query = `*[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        category,
        slug,
        mainImage,
        publishedAt,
        body
    }`;
    return client.fetch(query, { slug });
}

export const revalidate = 60;

// 3. Page Component
export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let project: Project = await getProject(slug);

    // FALLBACK: Use mock project if no data found (for preview purposes)
    if (!project) {
        project = { ...MOCK_PROJECT, title: `${MOCK_PROJECT.title} (Preview)` };
    }

    const imageUrl = typeof project.mainImage === 'string'
        ? project.mainImage
        : project.mainImage
            ? urlFor(project.mainImage).width(1920).height(1080).url()
            : null;

    return (
        <div className="bg-black text-white selection:bg-white selection:text-black">
            <PageHeader title={project.title} />

            <main className="min-h-screen px-4 pb-24 md:px-8 lg:px-16">
                <div className="mx-auto max-w-5xl">
                    {/* Back Link */}
                    <div className="mb-8 pt-8 md:pt-12">
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Work
                        </Link>
                    </div>

                    {/* Hero Section */}
                    <header className="mb-16">
                        <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                            <div>
                                <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-gray-500">
                                    {project.category}
                                </span>
                                <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
                                    {project.title}
                                </h1>
                            </div>
                            {project.publishedAt && (
                                <time className="text-sm text-gray-500">
                                    {new Date(project.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </time>
                            )}
                        </div>

                        {/* Main Image */}
                        {imageUrl && (
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white/5">
                                <Image
                                    src={imageUrl}
                                    alt={project.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </header>

                    {/* Content Section */}
                    {project.body && (
                        <div className="prose prose-invert prose-lg max-w-none md:prose-xl">
                            <PortableText
                                value={project.body}
                                components={{
                                    block: {
                                        normal: ({ children }) => <p className="mb-6 text-gray-300 leading-relaxed">{children}</p>,
                                        h1: ({ children }) => <h1 className="mb-6 mt-12 text-3xl font-bold text-white">{children}</h1>,
                                        h2: ({ children }) => <h2 className="mb-4 mt-10 text-2xl font-semibold text-white">{children}</h2>,
                                        h3: ({ children }) => <h3 className="mb-4 mt-8 text-xl font-semibold text-white">{children}</h3>,
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-white pl-4 italic text-gray-400">
                                                {children}
                                            </blockquote>
                                        ),
                                    },
                                    list: {
                                        bullet: ({ children }) => <ul className="mb-6 list-disc pl-6 text-gray-300">{children}</ul>,
                                        number: ({ children }) => <ol className="mb-6 list-decimal pl-6 text-gray-300">{children}</ol>,
                                    },
                                    marks: {
                                        link: ({ value, children }) => {
                                            const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
                                            return (
                                                <a
                                                    href={value?.href}
                                                    target={target}
                                                    rel={target === "_blank" ? "noindex nofollow" : undefined}
                                                    className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                                                >
                                                    {children}
                                                </a>
                                            );
                                        },
                                    },
                                    types: {
                                        image: ({ value }) => {
                                            if (!value?.asset?._ref) {
                                                return null;
                                            }
                                            return (
                                                <div className="my-8 relative aspect-video w-full overflow-hidden rounded-xl bg-white/5">
                                                    <Image
                                                        src={urlFor(value).width(1200).url()}
                                                        alt={value.alt || "Project Image"}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            );
                                        },
                                    },
                                }}
                            />
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
