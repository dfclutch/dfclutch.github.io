import React from "react";

import { Date, PostTitle, PostWrapper } from "./styles";
import Back from "./Back";
import { WIPTag } from "./WIPTag";

function Post({ title, date, content: Content, wip }) {
  console.log({ wip });
  return (
    <PostWrapper>
      <WIPTag wip={wip}>
        <PostTitle>{title}</PostTitle>
        <Date>{date}</Date>
        <hr />
        <Content />
      </WIPTag>
      <Back />
    </PostWrapper>
  );
}

export default Post;
