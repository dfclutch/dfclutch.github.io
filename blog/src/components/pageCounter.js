import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const CounterWrapper = styled.div`
	text-align: center;
	font-size: 18px;
	margin: 16px 0;
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
	console.log(props.maxPageIndex)
	console.log(props.page)
	return (
		<CounterWrapper>
			{ props.page > 0 &&
				<ChangePageWrapper onClick={props.prevPage}>
					prev 
				</ChangePageWrapper>
			}
			{props.page + 1}
			{ props.page + 1 < props.maxPageIndex &&
				<ChangePageWrapper onClick={props.nextPage}>
					next 
				</ChangePageWrapper>
			}
		</CounterWrapper>
	)
}