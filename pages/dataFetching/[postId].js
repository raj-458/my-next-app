import axios from "axios";
import { useRouter } from "next/router";
import { comments } from "../../data/comments";

const SingleComment = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div>
      <>
        <h1>
          {post?.id} : {post?.title}
        </h1>
        <h1>{post?.body}</h1>
      </>
    </div>
  );
};

export default SingleComment;

export async function getStaticPaths() {
  let postsURL = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios.get(postsURL);
  let posts = response.data;
  const paths = posts.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { postId },
  } = context;
  try {
    let postIdURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await axios.get(postIdURL);
    let post = response.data;
    if (!post?.id) {
      return { notFound: true };
    }

    return {
      props: {
        post: post,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
