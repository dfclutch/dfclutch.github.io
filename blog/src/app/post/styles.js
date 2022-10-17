import colors from "../../theme/colors";
import styled from "styled-components";
import typography from "../../theme/typography";

export const PostWrapper = styled.div`
  & div {
    position: relative;
  }

  margin-top: 10px;
  font-family: "Vollkorn", serif;
  ${typography.small}
  text-align: justify;
`;

export const PostTitle = styled.h1`
  color: ${colors.brand};
  font-family: "Roboto", Helvetica, sans-serif;
  ${typography.title}
`;

export const Date = styled.div`
  font-style: italic;
  ${typography.serif}
  ${typography.medium}
`;
