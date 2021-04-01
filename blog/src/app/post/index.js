import React from "react";

import { Link, useParams } from "react-router-dom";

import { Date, PostTitle, PostWrapper } from "./styles";
import Back from "./Back";

import posts from "../../posts";

function Post() {
  const { id } = useParams();

  const { title, date, content } = posts.find((post) => post.id === id);

  return (
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <Date>{date}</Date>
      <hr />

      {content}

      <Link to="/">
        <Back />
      </Link>
    </PostWrapper>
  );
}

export default Post;
