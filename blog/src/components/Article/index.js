import React from 'react';

import {
	Link,
	useParams,
} from 'react-router-dom';

import { ArticleTitle, Date } from './styles';
import { getArticleById } from './utils';

import { Back } from "../back";

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