import Link from "next/link";
import ".././globals.css";

export default function PostList(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Posts</h1>
      {props.data.postConnection.edges.map((post) => (
        <ul key={post.node.id}>
          <li>
            <Link
              className="postLink"
              href={`/posts/${post.node._sys.filename}`}
            >
              {post.node._sys.filename}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
