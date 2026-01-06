import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "newsStories",
  title: "News & Stories",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string", // or array of blocks if you want rich title
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
});
