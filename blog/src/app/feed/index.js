import React from "react";
import { useHistory } from "react-router-dom";

import Preview from "./Preview";
import { WIPToggle } from "./WIPToggle";

function Feed({ posts, wip, showWIP, setShowWIP }) {
  const history = useHistory();
  const postToPreviewComponent = postToPreviewComponentWithHistory(history);

  return (
    <>
      {setShowWIP && (
        <WIPToggle
          toggleShowWIP={() => setShowWIP(!showWIP)}
          showWIP={showWIP}
        />
      )}
      {showWIP && wip.map(postToPreviewComponent)}
      {posts.map(postToPreviewComponent)}
    </>
  );
}

const postToPreviewComponentWithHistory = (history) => (post) =>
  (
    <Preview
      {...post}
      onClick={() => history.push(`posts/${post.id}`)}
      key={post.id}
    />
  );

/*
  <PageCounter
    page={page}
    maxPageIndex={articles.length - 1}
    prevPage={prevPage}
    nextPage={nextPage}
  />
*/
export default Feed;
