import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from "react-transition-group";

import {PAGES} from "./config";
import Content from "./content";
import PageSelect from "./page_select";
import Sidebar from "./SideBar/sidebar";

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
    /*
    
                        <CSSTransition
                            classNames="content"
                            in={true}
                            timeout={200}>
                            >
                            {content}
                        </CSSTransition>
                        
        let content = ();
     */
    render() {
        return (
            <div>
                <Sidebar/>
                <div id="app-container">
                    <div id="content-container">
                        <h1>Dan Filler</h1>
                        <Content key={0} page_id={this.state.current_page_id}/>
                    </div>
                    <div id="page-select-container">
                        <PageSelect changePage={this.changePage} current_page_id={this.state.current_page_id}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));