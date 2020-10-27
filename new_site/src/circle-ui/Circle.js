import React from 'react';
import styled from 'styled-components';

import CircleElement from './CircleElement';
import { colors } from '../colors'

const CircleBorder = styled.div`
        position: absolute;
        top: calc(50% - ${() => window.mobileCheck() ? "40vw" : "32.5vh"});
        left: calc(${() => window.mobileCheck() ? "55% - 35vw" : "50% - 32.5vh"});
        width: ${() => window.mobileCheck() ? "70vw" : "65vh"};
        height: ${() => window.mobileCheck() ? "85vw" : "65vh"};
        border-radius: ${() => window.mobileCheck() ? "35vw" : "32.5vh"};
        border: 1px solid ${colors.neutral};
        background-color: ${colors.theme};
				z-index: -2;
`;

function buildCircleElements(elements, onPageClick) {
	const pageElementValues = Object.values(elements.pages);
	const pageElements = pageElementValues.map((element, index) => (
			<CircleElement
				{ ...element }
				index={ index }
				page
				onClick={ onPageClick }
			/>
		));

	const linkElementValues = elements.links;
	const linkElements = linkElementValues.map((element, index) => (
			<CircleElement
				{ ...element }
				index={index + pageElements.length}
			/>
		));

	return [ ...pageElements, ...linkElements ];
}

const Circle = (props) => {
	console.log(props);
	return (
		<div>
			<CircleBorder />
			{ props.content }
			{ buildCircleElements(props.elements, props.onPageClick) }
		</div>
	);
}

export default Circle;