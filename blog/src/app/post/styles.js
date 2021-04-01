import colors from "../../theme/colors";
import styled from "styled-components";

export const PostWrapper = styled.div`
  margin-top: 10px;

  p {
    font-family: "Vollkorn", serif;
    text-align: justify;
  }
`;

export const PostTitle = styled.h1`
  color: ${colors.black};
  font-size: 2.6rem;
`;

export const Date = styled.div`
  color: ${colors.darkGrey};
  font-style: italic;
  font-family: "Vollkorn", serif;
`;
