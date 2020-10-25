import styled from 'styled-components';

import { colors } from '../colors.js'; 

export const ContentContainer = styled.div`
	position: absolute;
	top: calc(50% - 30vh);
	left: calc(50% - 30vh);
	width: 60vh;
	border-radius: 30vh;

	a {
	    color: ${colors.darkNeutral};
	}

	a:visited {
	    color: ${colors.darkNeutral};
	}

	a:hover {
	    color: ${colors.accent};
	}

	a:active {
	    color: ${colors.accent};
	}
`;