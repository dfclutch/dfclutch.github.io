import React from "react";
import { useHistory } from "react-router-dom";

import Preview from "./Preview";

function Feed({ posts }) {
  const history = useHistory()

  return (
    <>
      {posts.map((post) => (
        <Preview
          {...post}
          onClick={() => history.push(`posts/${post.id}`)}
          key={post.id}
        />
      ))}
    </>
  );
}
/*
  <PageCounter
    page={page}
    maxPageIndex={articles.length - 1}
    prevPage={prevPage}
    nextPage={nextPage}
  />
*/
export default Feed;
