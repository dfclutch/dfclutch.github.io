import React from 'react';
import "./img_grid.scss";

class HomeContent extends React.Component {
    render() {
        return (
            <div className="home-content">
                <p>
                    Pennsylvania native living in Columbus, Ohio. Actively looking for employment in full-stack or
                    front-end web development. Passionate about Network Science, Agrotech, and Artificial Intelligence.
                </p>
                <p>
                    Frameworks and tech that I use:
                </p>
                <div className="gallery">
                    <img src="./img/react.png" alt="React" title="ReactJs"/>
                    <img src="./img/node.png" alt="Node" title="NodeJs"/>
                    <img src="./img/python.png" alt="Python" title="Python"/>
                    <img src="./img/mongo.png" alt="MongoDb" title="MongoDb"/>
                    <img src="./img/webpack.png" alt="Webpack" title="Webpack"/>
                    <img src="./img/d3.png" alt="D3js" title="D3js"/>
                    <img src="./img/hapi.png" alt="Hapi" title="HapiJS"/>
                    <img src="./img/jwt.png" alt="JWT" title="JSON Web Tokens"/>
                    <img src="./img/sass.png" alt="Sass" title="Sass"/>
                    <img src="./img/express.png" alt="Express" title="ExpressJS"/>
                    <img src="./img/babel.jpg" alt="Babel" title="Babel"/>
                    <img src="./img/intellij.png" alt="Intellij" title="IntelliJ Idea"/>
                    <img src="./img/redux.png" alt="Redux" title="Redux"/>
                </div>
            </div>
        );
    }
}

export default HomeContent