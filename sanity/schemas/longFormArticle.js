import HoverAnnotation from "@/components/hoverAnnotations/HoverAnnotation";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { XEmbed } from "react-social-media-embed";

const TweeterPreview = ({ url }) => {
  if (!url) {
    return null;
  }
  return <XEmbed url={url} />;
};

const CustomWidgetPreview = ({ heading, bulletPoints }) => {
  if (!heading || !bulletPoints?.length) return null;

  return (
    <div>
      <h3>{heading}</h3>
      <ul>
        {bulletPoints?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export const longFormArticle = {
  name: "longFormArticle",
  title: "Long Form Article",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      validation: (Rule) =>
        Rule.custom((image) => {
          // console.log(image);
          if (!image) {
            return "Required";
          }

          const filetype = getExtension(image.asset._ref);

          if (filetype !== "jpg" && filetype !== "png") {
            return "Image must be a JPG or PNG";
          }

          const { width, height } = getImageDimensions(image.asset._ref);

          // console.log(filetype, width, height);

          if (width < 300 || height < 300) {
            return "Image must be at least 300x300 pixels";
          }

          return true;
        }),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.max(200).error("Max 200 characters"),
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
        {
          type: "block",
          marks: {
            // decorators: [
            //   {
            //     title: "Highlight",
            //     value: "highlight",
            //     icon: () => "H",
            //     component: HighlightDecorator,
            //   },
            // ],

            annotations: [
              {
                name: "link",
                type: "object",
                title: "link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                  },
                ],
              },
              {
                name: "markWord",
                type: "object",
                title: "Mark Word",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "people" },
                      { type: "category" },
                      { type: "founder" },
                      { type: "influencer" },
                    ],
                  },
                ],
                components: {
                  annotation: HoverAnnotation,
                },
              },
            ],
          },
        },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
        {
          type: "object",
          name: "tweet",
          title: "Tweet Post",
          fields: [
            {
              type: "url",
              name: "url",
              description: "Paste the URL of the Tweet",
            },
          ],
          preview: {
            select: { url: "url" },
          },
          components: {
            preview: TweeterPreview,
          },
        },
        {
          type: "object",
          name: "customWidget",
          title: "Custom Widget",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "bulletPoints",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: {
            select: { heading: "heading", bulletPoints: "bulletPoints" },
          },
          components: {
            preview: CustomWidgetPreview,
          },
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule) =>
        Rule.max(5).error("You can only select up to 5 tags"),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
