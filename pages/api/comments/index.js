import { comments } from "../../../data/comments";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
      let comment = req.body.comment;
      let newData = { id: Date.now(), text: comment}
      comments.push(newData)
    res.status(200).json(comments);
  }
}
