import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const ArticleWrapper = styled.div`
	margin-top: 10px;
	padding: 0 10px 10px 10px;
	border: 1px solid ${colors.darkGrey};
	border-radius: 5px;
	background-color: ${colors.lightGrey};
`;

const ArticleTitle = styled.h1`
	color: ${colors.blue};
	font-size: 2.6rem;
`;

export const Article = (props) => {
	console.log(props);
	return (
		<ArticleWrapper>
			<ArticleTitle>{props.title}</ArticleTitle>
			<hr />
			{props.fullContent}
		</ArticleWrapper>
	)
}