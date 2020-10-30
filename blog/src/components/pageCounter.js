import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const CounterWrapper = styled.div`
	text-align: center;
	font-size: 18px;
`;

const ChangePageWrapper = styled.div`
	color: ${colors.grey};
	padding: 0 8px;
	display: inline-block;

	&:hover {
		cursor: pointer;
		color: ${colors.red};
	}
`;

export const PageCounter = (props) => {
	return (
		<CounterWrapper>
			<ChangePageWrapper onClick={props.prevPage}>
				prev 
			</ChangePageWrapper>
			{props.page + 1}
			<ChangePageWrapper onClick={props.nextPage}>
				next 
			</ChangePageWrapper>
		</CounterWrapper>
	)
}