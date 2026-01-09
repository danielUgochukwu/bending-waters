import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: { slug },
    });

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Ifeoluwa Omidiji`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
        },
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: { slug },
    });

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="grow container mx-auto px-4 py-12 max-w-4xl mt-20">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black uppercase">{post.title}</h1>
                    <p className="text-gray-500">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }) : ''}</p>
                </div>

                {post.mainImage && (
                    <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="text-black">
                    {post.body && (
                        <PortableText
                            value={post.body}
                            components={{
                                block: {
                                    h1: ({ children }) => <h1 className="text-3xl md:text-5xl font-bold mt-12 mb-6 uppercase">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl md:text-4xl font-bold mt-10 mb-5 uppercase">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-xl md:text-3xl font-bold mt-8 mb-4 uppercase">{children}</h3>,
                                    normal: ({ children }) => <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-800">{children}</p>,
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-np-orange pl-6 py-2 my-8 text-xl md:text-2xl italic font-medium text-gray-900 bg-gray-50 rounded-r-lg">
                                            {children}
                                        </blockquote>
                                    ),
                                },
                                list: {
                                    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg md:text-xl text-gray-800">{children}</ul>,
                                    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg md:text-xl text-gray-800">{children}</ol>,
                                },
                                marks: {
                                    link: ({ children, value }) => {
                                        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
                                        return (
                                            <a
                                                href={value.href}
                                                rel={rel}
                                                className="text-np-orange hover:text-black underline decoration-2 underline-offset-4 transition-colors font-medium"
                                            >
                                                {children}
                                            </a>
                                        );
                                    },
                                },
                            }}
                        />
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
