export function getArticleById(page, id) {
	return articles[page].find(article => article.id === id);
}