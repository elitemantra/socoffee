import { defineType } from "sanity";

const preDefinedSections = [
    'hero',
    'featuredByTag'
]

export const sections = defineType({
  name: "sections",
  title: "Sections",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section",
      type: "string",
      initialValue: () => preDefinedSections[0],
      options:{
        list:preDefinedSections
      },
      validation: (Rule) => Rule.required().error("Required").custom(section =>{
        return preDefinedSections.includes(section)
      }).error("invalid value")
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
      validation: (Rule) => Rule.required().error("Required")
    }
  ],
});