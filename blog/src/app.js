import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import { Article } from './components/article';
import { ArticleList } from './components/articleList';
import { Content } from './components/content';
import { PageCounter } from './components/pageCounter';
import { Back } from './components/back';
import { Title } from './components/title';


import { mobileCheck } from './mobile_check';
import articles from './articles';

function getCurrentArticle(page, index) {
	const article = articles[page][index];
	return article;
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onArticleList: true,
			page: 0,
			articleIndex: 0
		}

        window.mobileCheck = mobileCheck;
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.openArticle = this.openArticle.bind(this);
        this.backToArticleList = this.backToArticleList.bind(this);
	}

	nextPage() {
		if ((this.state.page + 1) === articles.length) return;
		this.setState(state => ({ page: state.page + 1 }))
	}

	prevPage() {
		if ((this.state.page) === 0) return;
		this.setState(state => ({ page: state.page - 1 }))
	}

	openArticle(index) {
		this.setState({
			onArticleList: false,
			articleIndex: index
		});
	}

	backToArticleList() {
		this.setState({ onArticleList: true });
	}

    render() {
    	const page = this.state.page;
    	const articleIndex = this.state.articleIndex;

    	const content = this.state.onArticleList
			?	<ArticleList articles={articles[page]} openArticle={this.openArticle}/>
			// the article can be fully determined by page and index within that page
			// the only information that needs to be passed down to is the idx within the page
        	: 	<Article { ...getCurrentArticle(page, articleIndex)} />;

    	return (
    		<div>
	    		<Content>
	    		<Title>
	    			
	    		</Title>
	        		{ content }
	    		{	this.state.onArticleList 
	    			? <PageCounter 
		    			page={page} 
	    				maxPageIndex={articles.length - 1} 
	    				prevPage={this.prevPage} 
	    				nextPage={this.nextPage}
					/>
					: <Back onClick={this.backToArticleList}/>
	    		}
	    		</Content>
    		</div>
    	)
    } 
}

ReactDOM.render(<App/>, document.getElementById("root"));
