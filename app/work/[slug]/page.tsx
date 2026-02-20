
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getMockProject, Project as MockProject } from "@/constants/mock-projects";

interface Project {
    _id: string;
    title: string;
    category: string;
    slug: { current: string };
    mainImage: SanityImageSource | string;
    publishedAt: string;
    body: any; // BlockContent
}

// 1. Generate Static Params for SSG/ISR
export async function generateStaticParams() {
    try {
        const query = `*[_type == "project"]{ "slug": slug.current }`;
        const projects = await client.fetch(query);
        return projects.map((project: { slug: string }) => ({
            slug: project.slug,
        }));
    } catch (e) {
        // Fallback for static params if Sanity fails (using mock data keys)
        // This allows build to pass even without sanity connection
        return [];
    }
}

// 2. Fetch Single Project Data
async function getProject(slug: string) {
    try {
        const query = `*[_type == "project" && slug.current == $slug][0] {
            _id,
            title,
            category,
            slug,
            mainImage,
            publishedAt,
            body
        }`;
        return await client.fetch(query, { slug });
    } catch (e) {
        return null;
    }
}

export const revalidate = 60;

// 3. Page Component
export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let project = await getProject(slug);

    // FALLBACK: Use mock project if no data found
    if (!project) {
        const mock = getMockProject(slug);
        if (mock) {
            project = {
                ...mock,
                mainImage: mock.mainImage || mock.image, // Use detail image or fallback to list image
                publishedAt: mock.publishedAt || new Date().toISOString(),
                body: mock.body || []
            } as any;
        } else {
            // 404 Fallback if not found in mock either
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
                    <h1 className="text-4xl font-bold">Project Not Found</h1>
                    <Link href="/work" className="mt-4 text-gray-400 hover:text-white">Back to Work</Link>
                </div>
            )
        }
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

