import { defineField, defineType } from "sanity";

export const comment = defineType({
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "website",
            title: "Website",
            type: "string",
        }),
        defineField({
            name: "comment",
            title: "Comment",
            type: "text",
        }),
        defineField({
            name: "post",
            title: "Post",
            type: "reference",
            to: [{ type: "newsStories" }],
        }),
        defineField({
            name: "approved",
            title: "Approved",
            type: "boolean",
            initialValue: false,
        }),
    ],
});
