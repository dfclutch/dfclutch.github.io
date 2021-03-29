import React from 'react';
import styled from 'styled-components';

import CircleElement from './CircleElement';
import { colors } from '../colors'
import { ContentContainer } from '../Content/ContentContainer';
import { contentFade } from './animationKeyframes';

const CircleBorder = styled.div`
	position: absolute;
	top: calc(50% - ${props => props.radius / 2 + "px"});
	left: calc(${() => window.mobileCheck() ? "55%" : "50%"} - ${props => props.radius / 2 + "px"});
	width: ${props => props.radius + "px"};
	height: ${props => props.radius + "px"};
	border-radius: ${props => props.radius / 2 + "px"};
	border: 1px solid ${colors.lightGrey};
	background-color: ${colors.black};
	z-index: -2;
	animation: ${contentFade} 2s;
`;

function buildCircleElements(elements, onPageClick, r) {
	const pageElementValues = Object.values(elements.pages);
	const pageElements = pageElementValues.map((element, index) => (
		<CircleElement
			{ ...element }
			index={ index }
			page
			onClick={ onPageClick }
			radius={r}
		/>
	));

	const linkElementValues = elements.links;
	const linkElements = linkElementValues.map((element, index) => (
		<CircleElement
			{ ...element }
			index={index + pageElements.length}
			radius={r}
		/>
	));

	return [ ...pageElements, ...linkElements ];
}

/*
	Returns radius of circle UI to look good on wide and tall screens
	params:
		factor - the percentage of the smaller dimension of the radius
*/
function calculateRadius (factor) {
	const width = window.innerWidth;
	const height = window.innerHeight;

	if (width < 600) return factor * width;
	const r = (width > height) ? (factor * height) : (factor * width);
	return r > 575 ? r : 575;
}

const Circle = (props) => {
	const CIRCLE_RADIUS_FACTOR = window.mobileCheck() ? 0.70 : 0.60;

	const r = calculateRadius(CIRCLE_RADIUS_FACTOR)
	return (
		<div>
			<CircleBorder radius={r}/>
			<ContentContainer radius={r}>
				{ props.content }
			</ContentContainer>
			{ buildCircleElements(props.elements, props.onPageClick, r) }
		</div>
	);
}

export default Circle;