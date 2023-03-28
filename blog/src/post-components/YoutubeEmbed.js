import React from "react";
import styled from "styled-components";

const EmbedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > iframe {
    max-width: 100%;
  }
`;

export const YoutubeEmbed = ({ src, width, height }) => {
  return (
    <EmbedContainer>
      <iframe
        width={width}
        height={height}
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </EmbedContainer>
  );
};
