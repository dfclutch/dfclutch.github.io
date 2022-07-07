import styled from "styled-components";

import colors from "../theme/colors";
import typography from "../theme/typography";

export const Mono = styled.span`
  font-size: ${typography.small};
  font-family: monospace;
  background-color: ${colors.lightGrey}
  color: black; 
`;
