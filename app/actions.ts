"use server";

import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export async function fetchMorePosts(start: number, end: number) {
    const { data } = await sanityFetch({
        query: POSTS_QUERY,
        params: { start, end },
    });
    return data;
}
