import React from 'react';
import {
	Link
} from 'react-router-dom';

import articles from '../../Articles';

import { ArticlePreview } from "./articlePreview";
/* import {PageCounter} from "./pageCounter"; */


function ArticleList() {
	return (
		<div>
			{ 
				articles.map((article) => (
					<Link to={`articles/${article.id}`} key={article.id}>
						<ArticlePreview {...article} />
					</Link>
				))
			}
		</div>
	);
};
/*
<PageCounter
	page={page}
	maxPageIndex={articles.length - 1}
	prevPage={prevPage}
	nextPage={nextPage}
/>
*/
export default ArticleList;