import React from 'react';

import {
	Link,
	useParams,
} from 'react-router-dom';

import {
	ArticleTitle,
	ArticleWrapper,
	Date
} from './styles';


import { Back } from "./back";
import articles from '../../Articles';

export function Article() {
	const { id } = useParams();

	const {
		title,
		date,
		fullContent
	} = articles.find(article => article.id === id );

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

export default Article;