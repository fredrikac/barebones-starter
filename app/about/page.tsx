import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));
  console.log();

  return paths || [];
}

export default async function AboutPage() {
  const data = await client.queries.page({
    relativePath: `about.mdx`,
  });

  return <ClientPage {...data} />;
}
