import React from "react";

import { LinkContainer } from "./styles";

function Link({ href, children }) {
  return (
    <LinkContainer href={href} target="_blank">
      { children }
    </LinkContainer>
  );
}

export default Link;
