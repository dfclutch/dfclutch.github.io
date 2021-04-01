import React from 'react';
import styled from 'styled-components';

import colors from '../theme/colors';

export const Title = styled.h1`
	color: ${colors.green};
	padding: 10px 0;
	width: 75%;
	font-size: 2.6rem;
	
	&:hover {
	    cursor: pointer;
	    color: ${colors.red};
	}
`;
