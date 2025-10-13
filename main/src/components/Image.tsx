import styled from "styled-components";
import { COLORS } from "../utils/colors";

const Container = styled.div<{ width?: string, margin?: string }>`
  ${({ width }) => width && `width: ${width};`}
  ${({ margin }) => margin && `margin: ${margin};`}

`

const ImageStyle = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

export const CircularImage = styled.img`
  display: block;
  max-width: 40%;
  height: auto;
  border-radius: 50%;
  margin: auto;
`

const Caption = styled.div`
  background-color: white;
  color: ${COLORS.blue};
  text-align: left;
  padding: 4px 6px;
`


export const Image = ({ caption, src, width, margin }: { caption?: string, src: string, width?: string, margin?: string }) => {
  return <Container width={width} margin={margin} className="image" >
    <ImageStyle src={src} />
    {caption && <Caption>{caption}</Caption>}
  </Container>
}
