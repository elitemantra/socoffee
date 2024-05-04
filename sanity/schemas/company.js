import { defineType } from "sanity";

export const company = defineType({
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
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