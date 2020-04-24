import React from 'react';
import ReactDOM from 'react-dom';

import "./home.scss";

class HomeContent extends React.Component {
    render() {
        return (
            <div className="home-content">
                <h1>Dan Filler</h1>
                <p>
                    Pennsylvania native living in Columbus, Ohio. Actively looking for employment in full-stack or
                    front-end web development. Passionate about Network Science, Agrotech, and Artificial Intelligence.
                </p>
                <p>
                    Frameworks and tech I use: React, Express, Hapi.js, Flask, Mongo, Axios, D3js, three.js, Webpack,
                    Babel, Sass, Bootstrap, Mocha, Chai, Enzyme, Sinon, Pact, JWT, Passport, AWS, Heroku
                </p>
            </div>
        );
    }
}

export default HomeContent