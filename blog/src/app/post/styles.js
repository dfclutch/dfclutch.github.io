import colors from "../../theme/colors";
import styled from "styled-components";
import typography from "../../theme/typography";

export const PostWrapper = styled.div`
  & div {
    position: relative;
  }

  margin-top: 10px;
  font-family: "Vollkorn", serif;
  font-size: 17px;
  text-align: justify;
`;

export const PostTitle = styled.h1`
  color: ${colors.white};
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 2.6rem;
`;

export const Date = styled.div`
  font-style: italic;
  ${typography.serif}
`;
