import Link from "next/link";
import "./post-list.css";
import ".././styles.css";

export default function PostList(props) {
  return (
    <>
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
    </>
  );
}
