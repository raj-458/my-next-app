import { comments } from "../../data/comments";

const SingleComment = ({ comment }) => {
  return <div>
    <h1>{comment.id} : {comment.text}</h1>
  </div>;
};

export default SingleComment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false
  };
}


export async function getStaticProps(context) {
  const { params: { commentId } } = context;
  let comment = comments.find((comm) => comm.id === parseInt(commentId));

  return {
    props: {
      comment
    }
  }
}