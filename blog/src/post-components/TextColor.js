import styled from "styled-components";
import colors from "../theme/colors";

export const TextColor = styled.span`
  color: ${({ color }) => color};
`;

export const Red = () => <TextColor color={colors.red} />;
export const Green = () => <TextColor color={colors.green} />;
export const Blue = () => <TextColor color={colors.blue} />;
