import React from 'react';
import ReactDOM from 'react-dom';

import {PAGES} from "./config";

class Content extends React.Component {
    renderContent() {
        return (
            <div className={`${this.props.page_id}-content`}>
                {PAGES[this.props.page_id].content}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default Content