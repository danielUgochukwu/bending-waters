"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

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
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-500">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                        </p>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{post.description}</p>
                    </div>
                </Link>
            ))}
        </>
    );
}
