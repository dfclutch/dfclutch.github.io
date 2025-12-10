import styled from 'styled-components';

import colors from '../../../../theme/colors';
import typography from '../../../../theme/typography';

export const TagPill = styled.div`
  ${typography.small}
  height: 1.7rem;
  border-radius: 1rem;
  background-color: ${colors.brand};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
  padding: 0 8px;
  margin: 4px;
`;