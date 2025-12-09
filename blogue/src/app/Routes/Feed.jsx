import posts from "../../posts";
import { wip } from "../../posts";

import Feed from "../Feed";

function getPosts() {
  return posts;
}

const FeedRoute = (props) => {
  const posts = getPosts();
  return <Feed posts={posts} wip={wip} {...props} />;
};

export default FeedRoute;
