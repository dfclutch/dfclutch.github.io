import React from 'react';
import ReactDOM from 'react-dom';

import Circle from './circle-ui/Circle';
import { 
    circleElements, 
    setActivePage,
    pageIds
} from './circleElements';

import "./style.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: circleElements
        }

        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {
        this.setPage(pageIds.projects);
    }

    setPage(id) {
        const updatedElements = setActivePage(id);
        this.setState({
            elements: updatedElements
        });
    }

    getActivePageContent() {
        const activePage = Object
        .values(this.state.elements.pages)
        .find(page => page.active);

        if (activePage) return activePage.content;
    }

    render() {
        return (
            <div>
                <Circle
                    elements={ this.state.elements }
                    onPageClick={ id => this.setPage(id) }
                    content={ this.getActivePageContent() }
                />
            </div>
        );
    } 
}

ReactDOM.render(<App/>, document.getElementById("root"));