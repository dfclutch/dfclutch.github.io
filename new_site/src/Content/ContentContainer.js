import styled from 'styled-components';

import { colors } from '../colors.js'; 

export const ContentContainer = styled.div`
	position: absolute;
	top: calc(50% - ${() => window.mobileCheck() ? "31vw" : "30vh"});
	left: calc(50% - ${() => window.mobileCheck() ? "31vw" : "30vh"});
	width: ${() => window.mobileCheck() ? "62vw" : "60vh"};
	border-radius: ${() => window.mobileCheck() ? "31vw" : "30vh"};

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