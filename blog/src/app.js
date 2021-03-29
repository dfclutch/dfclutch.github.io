import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";

import './style.scss';

import Article from './components/Article';
import { ArticleList } from './components/articleList';
import { Content } from './components/content';
import { Title } from './components/title';


import { mobileCheck } from './mobile_check';
import articles from './articles';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0
		};

        window.mobileCheck = mobileCheck;
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
	}

	nextPage() {
		if ((this.state.page + 1) === articles.length) return;
		this.setState(state => ({ page: state.page + 1 }))
	}

	prevPage() {
		if ((this.state.page) === 0) return;
		this.setState(state => ({ page: state.page - 1 }))
	}

    render() {
    	const page = this.state.page;
    	return (
    		<Router>
				<div>
					<Content>
					<Link to="/">
						<Title>
							Placeholder Title
						</Title>
					</Link>

					<Switch>
						<Route
							path="/articles/:id"
							children={<Article page={page}/>}>
						</Route>
						<Route path="/">
							<ArticleList
								articles={articles[page]}
								page={page}
								nextPage={this.nextPage}
								prevPage={this.prevPage}
							/>
						</Route>
					</Switch>
					</Content>
				</div>
			</Router>
    	)
    } 
}

ReactDOM.render(<App/>, document.getElementById("root"));
