import React from "react";
import { useParams } from "react-router-dom";

import posts from "../../posts";

import Feed from "../Feed";

function getPosts() {
  return posts;
}

const FeedRoute = () => {
  const posts = getPosts(useParams());
  return <Feed posts={posts} />;
};

export default FeedRoute;
