"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "./client-page.css";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const content = data.post.body;
  return (
    <div className="postWrapper">
      <h1 data-tina-field={tinaField(data.post, "title")} className="postTitle">
        {data.post.title}
      </h1>
      <hr />
      <div data-tina-field={tinaField(data.post, "body")} className="postBody">
        <TinaMarkdown content={content} />
      </div>
    </div>
  );
}
