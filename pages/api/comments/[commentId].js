// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { commentId } = req.query;
    let comment = comments.find((comm) => comm.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const { commentId } = req.query;
    let deletedComment = comments.find(
      (comm) => comm.id === parseInt(commentId)
    );
    let index = comments.findIndex((comm) => comm.id === parseInt(commentId));
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }
}
