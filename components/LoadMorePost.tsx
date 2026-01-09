"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { fetchMorePosts } from "@/app/actions";
import { Loader2 } from "lucide-react";

type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: any;
    description: string;
};

export default function LoadMorePosts({ initialPosts }: { initialPosts: Post[] }) {
    const [posts, setPosts] = useState<Post[]>(initialPosts || []);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const POSTS_PER_PAGE = 6;

    const loadMore = async () => {
        setIsLoading(true);
        try {
            const currentLength = posts.length;
            const newPosts = await fetchMorePosts(currentLength, currentLength + POSTS_PER_PAGE);

            if (newPosts.length === 0) {
                setHasMore(false);
            } else {
                setPosts((prev) => [...prev, ...newPosts]);
                if (newPosts.length < POSTS_PER_PAGE) {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error("Failed to load more posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (posts.length === 0) {
        return (
            <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">No news stories found.</p>
            </div>
        );
    }

    return (
        <>
            {posts.map((post) => (
                <Link
                    key={post._id}
                    href={`/news/${post.slug?.current}`}
                    className="group flex flex-col gap-4 cursor-pointer"
                >
                    <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gray-100">
                        {post.mainImage && (
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-500 font-medium">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }) : ''}
                        </p>
                        <h3 className="text-xl font-bold text-black transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{post.description}</p>
                    </div>
                </Link>
            ))}

            {hasMore && (
                <div className="col-span-full flex justify-center mt-8">
                    <button
                        onClick={loadMore}
                        disabled={isLoading}
                        className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-np-orange hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            "Load More Stories"
                        )}
                    </button>
                </div>
            )}
        </>
    );
}
