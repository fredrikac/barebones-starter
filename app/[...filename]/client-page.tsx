"use client";
import { useTina } from "tinacms/dist/react";
import type { PageQuery } from "../../tina/__generated__/types";
import ".././globals.css";
import Link from "next/link";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

// home page
export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { greeting, introduction, aboutCard, blogCard } = data.page;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {/* Intro Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-semibold">{greeting}</h1>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
            {introduction}
          </p>
        </section>

        {/* Navigation Cards */}
        <section className="grid md:grid-cols-2 gap-6">
          <Link href="/about" className="group">
            <div className="bg-white p-6 rounded-l shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-medium mb-2 hover:text-gray-600">
                {aboutCard?.title}
              </h2>
              <p className="text-neutral-600">{aboutCard?.description}</p>
            </div>
          </Link>

          <Link href="/posts" className="group">
            <div className="bg-white p-6 rounded-l shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-medium mb-2 group-hover:text-gray-600">
                {blogCard?.title}
              </h2>
              <p className="text-neutral-600">{blogCard?.description}</p>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
