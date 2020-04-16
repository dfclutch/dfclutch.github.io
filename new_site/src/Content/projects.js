import React from 'react';
import ReactDOM from 'react-dom';

class ProjectsContent extends React.Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <p>
                    <a href="http://dfclutch.github.io/apps/graphs">Graph Algorithms</a>
                    <br />
                    <a href="http://dfclutch.github.io/apps/d3">D3-based Network Generation Models</a>
                    <br />
                    <a href="http://java-docs.herokuapp.com">JavaDocs</a>
                    <br />
                </p>
            </div>
        );
    }
}

export default ProjectsContent