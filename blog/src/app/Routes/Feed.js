import React from "react";
import { useParams } from "react-router-dom";

import posts from "../../posts";
import { wip } from "../../posts";

import Feed from "../Feed";

function getPosts() {
  return posts;
}

const FeedRoute = (props) => {
  const posts = getPosts(useParams());
  return <Feed posts={posts} wip={wip} {...props} />;
};

export default FeedRoute;
