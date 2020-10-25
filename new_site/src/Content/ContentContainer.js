import styled from 'styled-components';

import { colors } from '../colors.js'; 

export const ContentContainer = styled.div`
	position: absolute;
	top: calc(50% - ${() => window.mobileCheck() ? "32vw" : "30vh"});
	left: calc(${() => window.mobileCheck() ? "55% - 32vw" : "50% - 30vh"});
	width: ${() => window.mobileCheck() ? "64vw" : "60vh"};
	border-radius: ${() => window.mobileCheck() ? "32vw" : "30vh"};
	z-index: 1;

	a {
			color: ${colors.darkNeutral};
			z-index: 100;
	}

	a:visited {
	    color: ${colors.darkNeutral};
			z-index: 100;
	}

	a:hover {
	    color: ${colors.accent};
			z-index: 100;
	}

	a:active {
	    color: ${colors.accent};
			z-index: 100;
	}
`;