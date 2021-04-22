import React from "react";
import { useParams } from "react-router-dom";

import posts from "../../posts";

import Post from "../Post";

function getPost({ id }) {
  return posts.find((post) => post.id === id);
}

const PostRoute = () => {
  const post = getPost(useParams());
  return <Post {...post} />;
};

export default PostRoute;
