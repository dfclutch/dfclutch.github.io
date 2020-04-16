import React from 'react';
import ReactDOM from 'react-dom';

import "./home.scss";

class HomeContent extends React.Component {
    render() {
        return (
            <div>
                <h1>Dan Filler</h1>
                <ul>
                    <li>The Ohio State University</li>
                    <li>|</li>
                    <li>Computer Science Engineering</li>
                    <li>|</li>
                    <li>Front-end Web App Developer</li>
                </ul>

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