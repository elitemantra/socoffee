import { defineType } from "sanity";

export const people = defineType({
  name: "people",
  title: "People",
  type: "document",
  fields: [
    {
      name: "name",
      title: "People Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
        name: "email",
        title: "email address",
        type: "string",
      },
  ],
});