import React from "react";
import { Link } from "react-router-dom";

import { Date, PostTitle, PostWrapper } from "./styles";
import Back from "./Back";

function Post({ title, date, content: Content }) {
  return (
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <Date>{date}</Date>
      <hr />
      <Content />
      <Link to="/">
        <Back />
      </Link>
    </PostWrapper>
  );
}

export default Post;
