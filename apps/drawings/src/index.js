import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { GlobalStyle } from "./styles";
import DrawingPicker from "./components/DrawingPicker";
import Drawing from "./components/Drawing";
import { addPrefetchNodes, getDrawingById, mobileCheck } from "./utilities";
import { DRAWINGS } from "./const";

const SiteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styled.div`
  font-size: 4em;
  letter-spacing: -2px;
  font-weight: 900;
`;

const Content = styled.div`
  width: ${({ isMobile }) => isMobile ? "95vw" : "60vw"};
`

const Site = () => {
  document.title = "Dan Filler's Drawings";
  const isMobile = mobileCheck()

  const [drawingId, setDrawingId] = useState();
  console.log({ drawingId });
  const currentDrawing = getDrawingById(DRAWINGS, drawingId)
  console.log({ currentDrawing });

  return (
    <SiteWrapper>
      <Content isMobile={isMobile}>
        <Title>DRAWINGS</Title>
        <DrawingPicker
          currentDrawing={currentDrawing}
          setDrawingId={setDrawingId}
        />

        {
          currentDrawing &&
          <Drawing drawing={currentDrawing} />
        }

      </Content>
      <GlobalStyle />
    </SiteWrapper>
  );
};

addPrefetchNodes(DRAWINGS)

ReactDOM.render(<Site />, document.getElementById("root"));
