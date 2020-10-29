import styled from 'styled-components';
import React from 'react';

import { colors } from '../colors.js'; 

const PADDING_WIDTH = 10;

const ContentContainerWrapper = styled.div`
	position: absolute;
	top: calc(50% - ${props => (props.radius / 2)+ "px"});
	left: calc(${() => window.mobileCheck() ? "55%" : "50%"} - ${props => (props.radius / 2) + "px"});
	width: ${props => (props.radius) / Math.sqrt(2) - 2 * PADDING_WIDTH  + "px"};
	height: ${props => (props.radius) / Math.sqrt(2)  - 2 * PADDING_WIDTH + "px"};
	border-radius: ${props => (props.radius / 2) + "px"};
	margin: ${ (props) => {
		const d = props.radius * 2;
		return (d - (d / Math.sqrt(2))) / 4 + "px";
	}};
	padding: ${PADDING_WIDTH}px;
	sizing: border-box;
	z-index: 1;
	line-height: "115%;";
	text-align: justify;
	font-size: ${() => window.mobileCheck() ? "19px" : "16px"};

	h1, h3 {
		margin: 0;
		margin-bottom: 6px;
	}

	p {
		margin: 0;
		margin-bottom: 8px;
	}

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

export const ContentContainer = (props) => {
	return (
		<ContentContainerWrapper {...props}>
			{props.children}
		</ContentContainerWrapper>
	);
}