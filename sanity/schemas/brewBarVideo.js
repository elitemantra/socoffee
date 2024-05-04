import { Rule } from "sanity";

export const brewBarVideo = {
    name: "brewBarVideo",
    title: "Brew Bar Video",
    type: "document",

    fields: [
        {
            name: "videoUrl",
            title: "Video Url",
            type: "string",
            validation: (Rule) => Rule.required().error("Required"),
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().error("Required"),
        },
        {
            name: "subTitle",
            title: "Sub Title",
            type: "string",
            validation: (Rule) => Rule.required().error("Required"),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: (Rule) => Rule.required().error("Required"),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        },
        {
            name: "thumbnail",
            title: "Thumbnail ",
            type: "image",
            validation: (Rule) => Rule.required().error("Required"),
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [
                { type: "block" },
                {
                    type: "image",
                    fields: [{ type: "text", name: "alt", title: "Alt" }],
                },
            ],
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: [{ type: "tag" }] }],
        },
        {
            name: "category",
            title: "Category",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
        }
    ],
};
