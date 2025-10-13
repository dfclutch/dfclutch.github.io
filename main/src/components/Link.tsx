import styled from "styled-components";

export function Link({
  href,
  children,
  className, // set by styled components
}: {
  href: string,
  children: React.ReactNode
  className?: string
}) {
  return (
    <a href={href} target="_blank" className={className}>
      {children}
    </a>
  );
}

export const BigLink = styled(Link)`
  font-size: 1.4em;
`;
