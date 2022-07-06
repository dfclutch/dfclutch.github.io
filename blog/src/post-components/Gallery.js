import React, { useState } from "react";
import styled from "styled-components";

import colors from "../theme/colors";
import { useBreakpoints } from "../utilities/responsive";

const GalleryWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 16px auto;
  width: ${({ width }) => width};
`;

const GalleryImage = styled.img`
  max-width: 100%;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
`;

const BUTTON_WIDTH = 64;

const Caption = styled.div`
  max-width: calc(100% - ${BUTTON_WIDTH * 2}px);
  color: ${colors.darkGrey};
`;

const Button = styled.div`
  width: ${BUTTON_WIDTH}px;
  cursor: pointer;
  color: ${colors.blue};
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    color: ${colors.darkGrey};
  }
`;

/**
 *
 *
 * @param { Array} images - an array of objects
 *  {
 *    alt: { String },
 *    caption: { String }
 *    src: { String },
 *  }
 * objects representing the images in the Gallery, in display order.
 */
export const Gallery = ({ images, breakpoints }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const image = images[imageIndex];

  const width = breakpoints ? useBreakpoints(breakpoints) : "100%";

  return (
    <GalleryWrapper width={width}>
      <GalleryImage
        src={image.src}
        alt={image.alt ? image.alt : image.caption || ""}
      />
      <Controls>
        <Button
          onClick={() => {
            setImageIndex(
              imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1
            );
          }}
        >
          {"<"}
        </Button>
        <Caption>{image.caption}</Caption>
        <Button
          onClick={() => {
            setImageIndex((imageIndex + 1) % images.length);
          }}
        >
          {">"}
        </Button>
      </Controls>
    </GalleryWrapper>
  );
};
