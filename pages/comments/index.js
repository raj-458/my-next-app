import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  const fetchComments = async () => {
    const response = await axios.get("/api/comments");
    setComments(response.data);
  };

  const submitComment = async () => {
    const response = await axios.post("/api/comments", {
      comment: inputComment,
    });
    let data = response.data;
  };

  const deleteComment = async (commentId) => {
    const response = await axios.delete(`/api/comments/${commentId}`);
    let data = response.data;
    await fetchComments();
  };

  return (
    <div>
      <b>
        <label>Enter comment: </label>
      </b>
      <input
        type="text"
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
      />
      <br />
      <br />

      <button
        onClick={submitComment}
        style={{ marginLeft: "5%", background: "grey", height: "25px" }}
        disabled={!inputComment ? true : false}
      >
        Submit Comment
      </button>

      <br />
      <br />
      <button
        onClick={fetchComments}
        style={{ marginLeft: "5%", background: "grey", height: "25px" }}
      >
        <b>Load Comments</b>
      </button>
      {comments && comments.length > 0 && (
        <ul>
          {comments.map((comm) => {
            return (
              <>
                <li
                  key={comm.id.toString()}
                  style={{ marginLeft: "1%", marginBottom: "1%" }}
                >
                  {comm.text}
                  <span style={{ marginLeft: "1%", marginBottom: "1%" }}>
                    <button
                      onClick={() => {
                        deleteComment(comm.id);
                      }}
                    >
                      Delete Comment
                    </button>
                  </span>
                  <span style={{ marginLeft: "1%", marginBottom: "1%" }}>
                    <Link href={`/comments/${comm.id.toString()}`}>
                      <button>Click here for more details</button>
                    </Link>
                  </span>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommentsPage;
