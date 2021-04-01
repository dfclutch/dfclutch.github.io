import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";

import Article from './components/Article';
import ArticleList from './components/ArticleList';
import { Content } from './components/content';
import { Title } from './components/title';

class App extends React.Component {

  componentDidMount() {
		window.mobileCheck = mobileCheck;
	}

	render() {

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
						children={<Article />}>
					</Route>
					<Route path="/">
						<ArticleList />
					</Route>
				</Switch>
				</Content>
			</div>
		</Router>
		)
	} 
}

ReactDOM.render(<App/>, document.getElementById("root"));
