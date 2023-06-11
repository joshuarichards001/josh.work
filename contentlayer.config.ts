import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the blog",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
});
