import React from 'react';
import styled from 'styled-components';
import {
	Link,
	useParams,
} from 'react-router-dom';

import colors from '../colors';
import {Back} from "./back";
import articles from "../articles";

function getArticleById(page, id) {
	return articles[page].find(article => article.id === id);
}

const ArticleWrapper = styled.div`
	margin-top: 10px;

	p {
		font-family: 'Vollkorn', serif;
		text-align: justify;
	}
	
	a {
		text-decoration: none;
		color: ${colors.blue};
	}
	
	a:visited {
		color: ${colors.blue};
	}
	
	a:hover {
		color: ${colors.yellow};
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
	const { id } = useParams();
	console.log(id);
	const {
		title,
		date,
		fullContent
	} = getArticleById(props.page, id);

	return (
		<ArticleWrapper>
			<ArticleTitle>{ title }</ArticleTitle>
			<Date>{ date }</Date>
			<hr />
			{ fullContent }
			<Link to="/">
				<Back />
			</Link>
		</ArticleWrapper>
	);
};