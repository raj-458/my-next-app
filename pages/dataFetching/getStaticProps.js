import axios from "axios";
import Link from "next/link";

export default function GetStaticProps({ posts }) {
  return (
    <div>
      <h3>List of posts </h3>
      {posts && posts.length > 0 && (
        <ul>
          {posts.map((post) => {
            return (
              <Link
                href={`/dataFetching/${post.id.toString()}`}
                key={post.id.toString()}
              >
                <li
                  key={post.id.toString()}
                  style={{ marginLeft: "1%", marginBottom: "1%" }}
                >
                  {post.title} <b><span>Click here to redirect</span></b>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// execute only once while creating build folder
export async function getStaticProps(context) {
  let postsURL = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios.get(postsURL);
  let posts = response.data;
  return {
    props: {
      posts: posts,
    },
  };
}
