import React from 'react';
import { ArticlePreview } from "./articlePreview";

function renderArticlePreviews(articles, onClick) {
	return articles.map((article, index) => (
		<ArticlePreview article={article} onClick={() => onClick(index) }/>
	))
}

export const ArticleList = (props) => {
	return (
		<div>
			{ renderArticlePreviews(props.articles, props.openArticle) }
		</div>
	)
}