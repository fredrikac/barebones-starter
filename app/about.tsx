import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Layout from "./layout";

export default function AboutPage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <h1 className="text-red-500">{data.page.title}</h1>
      <p>{data.page.body}</p>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.page({ relativePath: "about.md" });
  return {
    props: {
      ...tinaProps,
    },
  };
};
