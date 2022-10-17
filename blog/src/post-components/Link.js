import React from "react";

/**
 * Simple Link component that defaults to open in a new tab
 */

export const Link = ({ href, text, openInNewTab = true }) => {
  return (
    <a href={href} target={openInNewTab ? "_blank" : "_self"}>
      {text}
    </a>
  );
};
