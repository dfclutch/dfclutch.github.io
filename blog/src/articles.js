import { firstArticle } from './articles/firstArticle';
import chipotle from './articles/chipotle';

const allArticles = [
	chipotle,
	firstArticle,
];

const ARTICLES_PER_PAGE = 10;

function buildPaginatedArticles(allArticles) {
	let paginatedArticles = [];
	let pageCounter = -1;
	allArticles.forEach((article, i) => {
		const pageIndex = i % ARTICLES_PER_PAGE;

		if (pageIndex === 0) {
			paginatedArticles.push([]);
			pageCounter++;
		}
		paginatedArticles[pageCounter].push(article);
	});
	console.log(paginatedArticles);
	return paginatedArticles;
}

export default buildPaginatedArticles(allArticles);