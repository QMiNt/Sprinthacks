import React from "react";
import CommentGet from "./CommentGet";
import ForumGet from "./ForumGet";
import ForumPost from "./ForumPost";

const Discussion = () => {
  return (
    <>
      <div>DiscussionForum</div>
      <ForumPost />
      <ForumGet />
      {/* <CommentGet/> */}
    </>
  );
};

export default Discussion;
