export const recipeArticle = {
  name: "recipeArticle",
  title: "recipe Article",
  type: "document",

  fields: [
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
      name: "timeToMake",
      title: "Time to Make",
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
      name: "steps",
      title: "Steps",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "beanType",
      title: "Bean Type",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .error("Required")
          .max(20)
          .error("should be atlast 20 characters"),
    },
    {
      name: "origin",
      title: "Origin",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .error("Required")
          .max(20)
          .error("should be atlast 20 characters"),
    },
    {
      name: "typeOfRoast",
      title: "Type Of Roast",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "typeOfBrew",
      title: "Type Of Brew",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "machineType",
      title: "Machine Type",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "typeOfBeverage",
      title: "Type Of Beverage",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
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
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "brewBarVideo",
      title: "Brew Bar Video",
      type: "array",
      of: [{ type: "reference", to: [{ type: "brewBarVideo" }] }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Submitted", value: "submitted" },
          { title: "Published", value: "published" },
        ],
        layout: "radio", // Display options as radio buttons
      },
      initialValue: "draft",
    },
  ],
};
