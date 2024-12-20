import Link from "next/link";
import React from "react";
import "./header.css";
import "./styles.css";

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
          <Link className="headerLink" href="/about">
            About
          </Link>
          {" | "}
          <Link className="headerLink" href="/posts">
            Posts
          </Link>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
