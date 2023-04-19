import React from "react";
import { Avatar } from "@mui/material";
import Comment from "../Comment";
import CommentForm from "../Comment/commentForm";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const comments = [{ comment: "asd" }];
function Blog({ blog }: any): JSX.Element {
  return (
    <div style={{ padding: "40px 20px" }}>
      <div>
        <Avatar alt="Remy Sharp" src={imgLink} />
        <h5>{blog.author}</h5>
        <h5>{blog.title}</h5>
        <div>{blog.post}</div>
      </div>
      {comments.map((comment, index) => {
        return <div key={index}>{comment.comment}</div>;
      })}
      <Comment />
      <CommentForm blogId={blog._id} />
    </div>
  );
}

export default Blog;
