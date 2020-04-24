import React from 'react';
import ReactDOM from 'react-dom';

import {PAGES} from "./config";
import Content from "./content";
import PageSelect from "./page_select";

import "./style.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page_id: PAGES.home.id
        };
        this.changePage = this.changePage.bind(this);
    }

    changePage(next_page) {
        this.setState({
            current_page_id: next_page.id
        });
    }

    render() {
        return (
            <div id="app-container">
                <Content page_id={this.state.current_page_id}/>
                <div id="page-select">
                    <PageSelect changePage={this.changePage} current_page_id={this.state.current_page_id}/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("root"))