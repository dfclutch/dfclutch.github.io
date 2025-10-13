import React from "react";
import { useNavigate } from "react-router-dom";

import Preview from "./Preview";

function Feed({ posts }) {
  const navigate = useNavigate()

  return (
    <>
      {posts.map((post) => (
        <Preview
          {...post}
          onClick={() => navigate(`posts/${post.id}`)}
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
