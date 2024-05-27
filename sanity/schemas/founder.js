import { defineType } from "sanity";

export const founder = defineType({
  name: "founder",
  title: "Founder",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Founder Name",
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
  ],
});
