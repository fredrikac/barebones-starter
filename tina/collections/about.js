/**
 * @type {import('tinacms').Collection}
 */
export default {
    label: "About",
    name: "about",
    path: "content/about",
    format: "mdx",
    fields: [
      {
        name: "body",
        label: "Main Content",
        type: "rich-text",
        isBody: true,
      },
    ],
    ui: {
      router: ({ document }) => {
        if (document._sys.filename === "about") {
          return `/about`;
        }
        return undefined;
      },
    },
  };
  