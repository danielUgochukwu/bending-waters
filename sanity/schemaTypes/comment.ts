import { defineField, defineType } from "sanity";

export const comment = defineType({
    name: "News or Blog Comments",
    title: "News or Blog Comments",
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
            title: "News or Blog",
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
