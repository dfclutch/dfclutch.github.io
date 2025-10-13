import styled from "styled-components";
import { BigLink } from "./Link";

export const ProjectContainer = styled.div`
  margin-bottom: 10px;
`;

export function Project({
  description,
  link,
  title
}: {
  description: string,
  link: string,
  title: string
}) {
  return (
    <ProjectContainer>
      <BigLink href={link}>
        {title}
      </BigLink>
      <p>
        {description}
      </p>
    </ProjectContainer>
  );
}