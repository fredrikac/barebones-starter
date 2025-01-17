"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../tina/__generated__/types";
// import { TinaMarkdown } from "tinacms/dist/rich-text";
import ".././globals.css";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PageQuery;
}

// this is the about page - currently using the page config
// investigate: how to properly separate the config files. Use Page for all pages? Separate files for each page? Check out best practices.
export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  console.log("about page data", content.children[0]);
  return (
    <div className="p-4 w-9/12">
      <h1 data-tina-field={tinaField(data.page, "title")} className="pageTitle">
        {data.page.title}
      </h1>
      <hr />
      <div className="pt-4">
        <p>
          This page is a work in progress. Check out my{" "}
          <a href="https://github.com/fredrikac" className="hover:underline">
            github
          </a>{" "}
          or connect on{" "}
          <a
            href="www.linkedin.com/in/fredrika-carlsen"
            className="hover:underline"
          >
            linkedin.
          </a>
        </p>
      </div>
      {/* <div data-tina-field={tinaField(data.page, "body")} className="pt-4">
        <TinaMarkdown content={content} />
      </div> */}
    </div>
  );
}
