import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSidebar from "@/components/NewsSidebar";
import CommentSection from "@/components/CommentSection";
import LatestNews from "@/components/LatestNews";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const { data: post } = await sanityFetch({ query: POST_QUERY, params: { slug } });

    if (!post) {
        return {
            title: "News Not Found",
        };
    }

    return {
        title: `${post.title} | Ifeoluwa Omidiji`,
        description: post.description,
    };
}

const NewsSlugPage = async ({ params }: Props) => {
    const { slug } = await params;
    const { data: post } = await sanityFetch({ query: POST_QUERY, params: { slug } });

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-[#0a0a0a] min-h-screen flex flex-col font-sans text-gray-300">
            <Header />

            <div className="relative w-full h-50 md:h-90 flex-center">
                <Image
                    src="/images/news_header.png"
                    alt="News Header"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase text-center px-4 font-bold max-w-5xl">
                    {post.title}
                </h1>
            </div>

            <main className="grow container mx-auto px-4 py-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden">
                            <Image
                                src={post.mainImage ? urlFor(post.mainImage).url() : "/images/news_header.png"}
                                alt={post.title || "News Image"}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>


                        <div className="mb-8 text-gray-400 text-base md:text-xl leading-relaxed text-justify">
                            {post.description}
                        </div>

                        <div className="text-gray-300">
                            {post.body && (
                                <PortableText
                                    value={post.body}
                                    components={{
                                        block: {
                                            h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-white">{children}</h1>,
                                            h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-white">{children}</h2>,
                                            h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">{children}</h3>,
                                            normal: ({ children }) => <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-400 text-justify">{children}</p>,
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-np-orange pl-6 py-2 my-8 text-lg md:text-xl italic font-medium text-gray-300 bg-[#1a1a1a] rounded-r-lg">
                                                    {children}
                                                </blockquote>
                                            ),
                                        },
                                        list: {
                                            bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-xl text-gray-400">{children}</ul>,
                                            number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-base md:text-xl text-gray-400">{children}</ol>,
                                        },
                                        marks: {
                                            link: ({ children, value }) => {
                                                const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
                                                return (
                                                    <a
                                                        href={value.href}
                                                        rel={rel}
                                                        className="text-np-orange hover:text-white underline decoration-2 underline-offset-4 transition-colors font-medium"
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

                        <LatestNews />

                        {/* Posted In & Tags Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold text-lg">Posted In</span>
                                {post.category && (
                                    <span className="px-4 py-2 bg-np-orange text-black font-bold rounded text-sm uppercase">
                                        {post.category}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold text-lg">Tags</span>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags && post.tags.length > 0 ? (
                                        post.tags.map((tag: string, idx: number) => (
                                            <span key={idx} className="px-4 py-2 border border-np-orange text-white rounded-full text-sm hover:bg-np-orange hover:text-black transition-colors cursor-pointer">
                                                {tag}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="px-4 py-2 border border-np-orange text-white rounded-full text-sm">Optimize</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <CommentSection comments={post.comments} postId={post._id} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <NewsSidebar />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewsSlugPage;
