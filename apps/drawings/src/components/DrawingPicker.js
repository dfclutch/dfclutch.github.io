import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DRAWINGS } from "../const";
import { getDrawingById, groupDrawingsByYear, mobileCheck } from "../utilities";

const DrawingPicker = ({ currentDrawing, setDrawingId }) => {
  const [openYear, setOpenYear] = useState();

  const drawingsByYear = groupDrawingsByYear(DRAWINGS)
  const currentDrawings = drawingsByYear[openYear]

  return (
    <DrawingOptionsContainer height="200px">
      <DrawingOptionsColumn width="60px">
        {
          Object.keys(drawingsByYear).map((year) => (
            <PickerOption
              title={year}
              onClick={() => setOpenYear(year)}
              highlight={openYear === year}
            />
          ))
        }
      </DrawingOptionsColumn>
      {
        openYear &&
        <DrawingOptionsColumn>
          {
            currentDrawings.map((drawing) => (
              <PickerOption
                title={drawing.title}
                onClick={() => setDrawingId(drawing.id)}
                highlight={currentDrawing && currentDrawing.id === drawing.id}
              />
            ))
          }
        </DrawingOptionsColumn>
      }

    </DrawingOptionsContainer >
  );
};

const DrawingOptionsContainer = styled.div`
  display: flex;
  justify-content: left;
  height: ${({ height }) => height};
`

const DrawingOptionsColumn = styled.div`
  width: ${({ width }) => width || "50%"};
`

const OptionTitle = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  font-size: .9em;
  letter-spacing: 1.5px;
  padding: 4px;
  margin: 4px 0;

  ${({ highlight }) => highlight && `
    background-color: #5e9173;
    color: white;
  `}

  ${({ isMobile, highlight }) => !isMobile && !highlight && `
    &:hover {
      background-color: #d5e1eb;
    }
  `};
`

const PickerOption = ({ title, onClick, highlight }) => {
  const isMobile = mobileCheck()
  return (
    <OptionTitle onClick={onClick} isMobile={isMobile} highlight={highlight}>
      {title}
    </OptionTitle>
  )
}

export default DrawingPicker;
