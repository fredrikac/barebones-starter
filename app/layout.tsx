import Link from "next/link";
import React from "react";
import "./header.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link className="headerLink" href="/">
            Home
          </Link>
          {" | "}
          <Link className="headerLink" href="/posts">
            Posts
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
