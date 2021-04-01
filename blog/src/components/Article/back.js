import React from 'react';
import styled from 'styled-components';

import colors from '../../theme/colors';

const BackWrapper = styled.div`
	text-align: center;
	color: ${colors.grey};
	padding: 18px 0;
	font-size: 18px;

	&:hover {
		cursor: pointer;
		color: ${colors.red};
	}
`;

export const Back = () => {
	return (
		<BackWrapper>
			back
		</BackWrapper>
	)
}