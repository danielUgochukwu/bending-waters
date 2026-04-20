"use server";

import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export async function fetchMorePosts(
    start: number,
    end: number,
    searchParams?: { search?: string; category?: string; tag?: string }
) {
    const { data } = await sanityFetch({
        query: POSTS_QUERY,
        params: {
            search: searchParams?.search || null,
            category: searchParams?.category || null,
            tag: searchParams?.tag || null,
            start,
            end,
        } as any,
    });
    return data;
}
