/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { media } from "sanity-plugin-media";
import { workflow } from "sanity-plugin-workflow";

/**
 * This configuration is used for the Sanity Studio mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    media(),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    workflow({
      // Required, list of document type names
      schemaTypes: ["longFormArticle"],
      states: [
        {
          id: "draft",
          title: "Draft",
          color: "default",
          requireAssignment: false,
          requireValidation: true,
          transitions: ["inReview"],
          roles: ["editor", "administrator"],
        },
        {
          id: "inReview",
          title: "In Review",
          color: "warning",
          roles: ["editor", "administrator"],
          requireAssignment: false,
          requireValidation: true,
          transitions: ["changesRequested", "approved", "draft"],
        },
        {
          id: "changesRequested",
          title: "Changes Requested",
          color: "danger",
          roles: ["editor", "administrator"],
          requireAssignment: false,
          requireValidation: true,
          transitions: ["inReview", "approved"],
        },
        {
          id: "approved",
          title: "Approved",
          color: "success",
          roles: ["editor", "administrator"],
          requireAssignment: false,
          requireValidation: true,
          transitions: ["inReview", "changesRequested"],
        },
      ],
    }),
  ],
  document: {
    actions: (prev, context) => {
      // Add custom workflow action before the default publish action
      // const customAction = CustomWorkflowAction(context);
      // return prev.map((originalAction) => {
      //   if (originalAction.label === "Publish") {
      //     return customAction;
      //   }
      //   return originalAction;
      // });
      return prev;
    },
  },
});
