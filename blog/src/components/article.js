import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const ArticleWrapper = styled.div`
	margin-top: 10px;
	padding: ${() => window.mobileCheck() ? "10px" : "24px" };
	padding-top: 0;
	border: 1px solid ${colors.darkGrey};
	border-radius: 5px;
	background-color: ${colors.lightGrey};

	p {
		font-family: 'Vollkorn', serif;
	}
`;

const ArticleTitle = styled.h1`
	color: ${colors.blue};
	font-size: 2.6rem;
`;

const Date = styled.div`
	color: ${colors.darkGrey};
	font-style: italic;
	font-family: 'Vollkorn', serif;
`;

export const Article = (props) => {
	return (
		<ArticleWrapper>
			<ArticleTitle>{props.title}</ArticleTitle>
			<Date>{props.date}</Date>
			<hr />
			{props.fullContent}
		</ArticleWrapper>
	)
}