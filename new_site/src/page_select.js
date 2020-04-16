import React from 'react';
import ReactDOM from 'react-dom';

import {PAGES} from "./config";
import "./page_select.scss";

class PageSelect extends React.Component {

    renderTabs() {
        let tabs = Object.keys(PAGES).map(page_name => {
            let page = PAGES[page_name];

            return (
                <div
                    id={page.id}
                    onClick={() => this.props.changePage(page)}
                    key={page.id}
                    className={ page.id === this.props.current_page_id ? "selected" : ""}
                >
                    {page.text}
                </div>
            )
        })

        return tabs;
    }

    render() {
        return (
            <div id="pages">
                {this.renderTabs()}
            </div>
        );
    }
}

export default PageSelect