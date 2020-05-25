import React from 'react';
import "./img_grid.scss";

class HomeContent extends React.Component {
    render() {
        return (
            <div className="home-content">
                <p>
                    Pennsylvania native and Ohio State Graduate. Actively looking for employment in full-stack or
                    front-end web development. Passionate about Network Science, Agrotech, and Artificial Intelligence.
                    <br/>
                    <a href="https://drive.google.com/open?id=1Imicuu77yu0kSi8r-0ahMvY5AD5L-V7C">Resume</a>
                </p>
                <p>
                    Frameworks and tech that I use:
                </p>
                <div className="gallery">
                    <img src="./img/react.png" alt="React" title="ReactJs"/>
                    <img src="./img/redux.png" alt="Redux" title="Redux"/>
                    <img src="./img/node.png" alt="Node" title="NodeJs"/>
                    <img src="./img/python.png" alt="Python" title="Python"/>
                    <img src="./img/mongo.png" alt="MongoDb" title="MongoDb"/>
                    <img src="./img/webpack.png" alt="Webpack" title="Webpack"/>
                    <img src="./img/d3.png" alt="D3js" title="D3js"/>
                    <img src="./img/git.png" alt="Git" title="Git"/>
                    <img src="./img/postman.svg" alt="postman" title="Postman"/>
                    <img src="./img/sass.png" alt="Sass" title="Sass"/>
                    <img src="./img/npm.png" alt="npm" title="Node Package Manager"/>
                    <img src="./img/babel.jpg" alt="Babel" title="Babel"/>
                    <img src="./img/intellij.png" alt="Intellij" title="IntelliJ Idea"/>
                </div>
            </div>
        );
    }
}

export default HomeContent