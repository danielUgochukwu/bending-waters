import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "newsStories"] | order(_createdAt desc) [$start..$end] {
    _id,
    title,
    slug,
    author,
    "publishedAt": _createdAt,
    "mainImage": image,
    "description": pt::text(description),
    "body": description
  }
`);

export const POST_QUERY = defineQuery(`
  *[_type == "newsStories" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    "publishedAt": _createdAt,
    "mainImage": image,
    "description": pt::text(description),
    "body": description
  }
`);
