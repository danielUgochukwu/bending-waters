import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "newsStories" 
    && ($search == null || title match $search || description match $search)
    && ($category == null || category->title == $category)
    && ($tag == null || $tag in tags)
  ] | order(_createdAt desc) [$start..$end] {
    _id,
    title,
    slug,
    author->{name, image},
    "category": category->title,
    tags,
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
    author->{name, image, bio},
    "category": category->title,
    tags,
    "publishedAt": _createdAt,
    "mainImage": image,
    "description": pt::text(description),
    "body": description,
    "comments": *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc) {
      name,
      comment,
      _createdAt
    }
  }
`);

export const LATEST_NEWS_QUERY = defineQuery(`
  *[_type == "newsStories"] | order(_createdAt desc) [0..2] {
    title,
    slug,
    author->{name},
    "publishedAt": _createdAt,
    "commentsCount": count(*[_type == "comment" && post._ref == ^._id && approved == true])
  }
`);

export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] {
    title,
    "count": count(*[_type == "newsStories" && references(^._id)])
  }
`);

export const TAGS_QUERY = defineQuery(`
  array::unique(*[_type == "newsStories"].tags[])
`);
