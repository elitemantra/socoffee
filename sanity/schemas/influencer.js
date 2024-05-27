import { defineType } from "sanity";

export const influencer = defineType({
  name: "influencer",
  title: "Influencer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Influencer Name",
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
