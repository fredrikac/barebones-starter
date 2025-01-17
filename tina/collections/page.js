
/**
 * @type {import('tinacms').Collection}
 */

export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
    {
      type: "string",
      label: "Greeting",
      name: "greeting",
      description: "The greeting text (e.g. 'Hi, I'm Fredrika 👋')",
    },
    {
      type: "string",
      label: "Introduction",
      name: "introduction",
      description: "Your main introduction text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "About Card",
      name: "aboutCard",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          description: "Title for the About section card",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          description: "Brief description for the About section",
        },
      ],
    },
    {
      type: "object",
      label: "Blog Card",
      name: "blogCard",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          description: "Title for the Blog section card",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          description: "Brief description for the Blog section",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
