import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    mainImage: any;
    publishedAt: string;
    category: string;
}

interface NewsGridProps {
    searchParams?: {
        search?: string;
        category?: string;
        tag?: string;
    };
}

const NewsGrid = async ({ searchParams }: NewsGridProps) => {
    const { data: posts } = await sanityFetch({
        query: POSTS_QUERY,
        params: {
            search: searchParams?.search || null,
            category: searchParams?.category || null,
            tag: searchParams?.tag || null,
            start: 0,
            end: 12
        } as any
    });

    if (!posts || posts.length === 0) {
        return (
            <div className="mt-24 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">No results found</h3>
                <p className="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
                <Link href="/news" className="inline-block mt-6 px-6 py-3 bg-np-orange text-black font-bold rounded hover:bg-white transition-colors">
                    Clear Filters
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {posts.map((post: Post) => (
                <Link
                    key={post._id}
                    href={`/news/${post.slug?.current}`}
                    className="group flex flex-col gap-4 cursor-pointer"
                >
                    <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl md:rounded-4xl bg-gray-900">
                        {post.mainImage && (
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title || "News Image"}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-3 px-2">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wide">
                            <span>
                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : ''}
                            </span>
                            {post.category && (
                                <>
                                    <span className="w-1 h-3 bg-np-orange inline-block mx-1"></span>
                                    <span>{post.category}</span>
                                </>
                            )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-np-orange transition-colors">
                            {post.title}
                        </h3>

                        <div className="flex items-center gap-2 text-np-orange font-medium mt-2 group-hover:gap-3 transition-all">
                            <span>Read More</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default NewsGrid;
