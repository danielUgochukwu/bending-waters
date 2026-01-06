import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "news"] | order(publishedAt desc) [$start..$end] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    description,
    body
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    description,
    body
  }
`);
