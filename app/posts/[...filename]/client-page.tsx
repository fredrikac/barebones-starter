"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../.././globals.css";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

// this is the individual post page
export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const content = data.post.body;
  return (
    <div className="p-4 w-9/12 md:w-9/12 lg:w-6/12">
      <h1
        data-tina-field={tinaField(data.post, "title")}
        className="text-md pb-4"
      >
        {data.post.title}
      </h1>
      <hr />
      <div data-tina-field={tinaField(data.post, "body")} className="pt-4">
        <TinaMarkdown content={content} />
      </div>
    </div>
  );
}
