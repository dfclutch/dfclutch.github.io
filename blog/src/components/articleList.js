import React from 'react';
import {
	Link
} from 'react-router-dom';

import { ArticlePreview } from "./articlePreview";
import {PageCounter} from "./pageCounter";

function renderArticlePreviews(articles) {
	return articles.map((article) => (
		<Link to={'articles/' + article.id}>
			<ArticlePreview article={article} />
		</Link>
	));
}

export const ArticleList = (props) => {
	return (
		<div>
			{ renderArticlePreviews(props.articles) }
			<PageCounter
				page={props.page}
				maxPageIndex={props.articles.length - 1}
				prevPage={props.prevPage}
				nextPage={props.nextPage}
			/>
		</div>
	);
};