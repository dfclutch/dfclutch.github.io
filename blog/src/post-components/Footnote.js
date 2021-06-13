import styled from "styled-components";

import colors from "../theme/colors";
import typography from "../theme/typography";

export const Footnote = styled.div`
  position: absolute;
  bottom: 0;
  ${typography.serif}
  ${typography.extra_small}
  font-style: italic;
  color: ${colors.darkGrey};
`;
