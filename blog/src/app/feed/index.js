import React from "react";
import { Link } from "react-router-dom";

import Preview from "./Preview";
/* import {PageCounter} from "./pageCounter"; */

function Feed({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link to={`posts/${post.id}`} key={post.id}>
          <Preview {...post} />
        </Link>
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
