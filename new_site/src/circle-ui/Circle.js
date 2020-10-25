import React from 'react';
import styled from 'styled-components';

import CircleElement from './CircleElement';

const CircleBorder = styled.div`
        position: absolute;
        top: calc(50% - 32.5vh);
        left: calc(50% - 32.5vh);
        width: 65vh;
        height: 65vh;
        border-radius: 32.5vh;
        border: 1px solid #FFFFCB;
        background-color: #407d71;
        z-index: "-1";
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
	return (
		<div>
			<CircleBorder />
			{ props.content }
			{ buildCircleElements(props.elements, props.onPageClick) }
		</div>
	);
}

export default Circle;