"use client";
import Link from "next/link";
import ".././globals.css";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function PostList(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sort posts by creation date (newest first)
  const sortedPosts = [...props.data.postConnection.edges].sort((a, b) => {
    return new Date(b.node.date).getTime() - new Date(a.node.date).getTime();
  });

  return (
    <div className="min-h-screen">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 right-4 z-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md"
        >
          {isSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div
          className={`
          fixed lg:static inset-y-0 left-0 
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition-transform duration-200 ease-in-out
          w-72 border-r z-20
          overflow-y-auto
          lg:min-h-screen
        `}
        >
          <div className="pl-8  py-6 pr-8">
            <h2 className="text-xl font-bold mb-4 pt-12 lg:pt-0">All Posts</h2>
            <nav>
              <ul className="space-y-2">
                {sortedPosts.map((post) => (
                  <li key={post.node.id}>
                    <Link
                      className="postLink hover:underline block py-1"
                      href={`/posts/${post.node._sys.filename}`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {post.node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 lg:ml-16">
          <h1 className="text-3xl font-bold mb-8 pt-12 lg:pt-0">
            Latest Posts
          </h1>
          <div className="space-y-12">
            {sortedPosts.map((post) => (
              <article key={post.node.id} className="border-b pb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <Link
                    href={`/posts/${post.node._sys.filename}`}
                    className="hover:text-gray-600"
                  >
                    {post.node.title}
                  </Link>
                </h2>
                <div className="prose max-w-none">
                  {post.node.body && (
                    <div className="line-clamp-3">
                      <TinaMarkdown content={post.node.body} />
                    </div>
                  )}
                </div>
                <Link
                  href={`/posts/${post.node._sys.filename}`}
                  className="inline-block mt-4 text-gray-600 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
