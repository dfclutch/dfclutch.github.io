import React from 'react';

import Carousel from "../Carousel/carousel";

class AboutContent extends React.Component {
    render() {
        return (
            <div>
                <Carousel
                    slides={
                        [(
                            <div>
                                <h4>Software Engineering</h4>
                                <p>
                                    Within Software Engineering my specialty is developing web applications. In personal projects, my tech stack generally includes React for frontend,
                                    NodeJS + Express for backend APIs and serving static content, and MongoDB as an RDMS. Along with these I use tools like npm and webpack for module
                                    management and bundling, Sass and bootstrap for CSS, and mongoose for database binding. Git + Github + Travis and Heroku are used
                                    for deploying fullstack applications, though many smaller projects are simply deployed through Github Pages. I mainly use Mocha and Chai for general 
                                    JavaScript testing, and Enzyme for testing React code. <br />
                                    I am a follower the Robert C. Martin Clean Code philosophy. Although the age of the book is starting to show, I think it still provides the best
                                    take on what is and isn't <em>clean</em>. I recently started reading back through <a href="https://goldbergyoni.com/">this incredible blog</a> by Yoni Goldberg
                                    as a way to improve my knowledge of NodeJS best practices.
                                </p>
                            </div>),
                            (
                                <div>
                                    <h4>Academics</h4>
                                    <p>
                                        At Ohio State I have learned about a broad range of topics within Computer
                                        Science. My favorite class is Automata and Formal Languages. We studied the
                                        mathematics
                                        of early computer scientists like Alan Turing who formalized the notion of
                                        computing
                                        into definable models of varying complexity and computational power. The
                                        majority of the class is building machines with pencil and paper drawings to
                                        acheive computational results. My
                                        undergrad specialization is in Artificial
                                        Intelligence where I have taken classes in general machine learning and
                                        statistical modeling, neural
                                        networks, and a capstone class in knowledge-based
                                        systems.
                                    </p>
                                </div>
                            ), (
                            <div>
                                <h4>Hobbies</h4>
                                <p>
                                    Beyond Computer Science I have a lot of other hobbies. I invest a large amount
                                    of time and
                                    money into ultralight backpacking, <a target="_blank" href="https://lighterpack.com/r/73c46t">here
                                    is my
                                    lighterpack.</a> To go along with long distance hiking, I've been a runner for most
                                    of
                                    my life. I am
                                    a specialty coffee drinker and daily home-espresso maker. I use a manual espresso
                                    press
                                    and
                                    grinder, and I prefer Ethiopian natural process coffees. I play a host of musical
                                    instruments,
                                    mostly guitar, where I study the <a target="_blank"
                                    href="https://rateyourmusic.com/genre/American+Primitivism/">American
                                    Primitivism style.</a>
                                
                                </p>
                            </div>
                        )
                        ]
                    }/>
            </div>
        );
    }
}

export default AboutContent