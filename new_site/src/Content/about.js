import React from 'react';

import Carousel from "../Carousel/carousel";

class AboutContent extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <Carousel
                    slides={
                        [(
                            <div>
                                <h4>Software Engineering</h4>
                                <p>
                                    Although it shocks most of my friends and professors, JavaScript is my favorite
                                    programming language.
                                    In my personal work, I build webapps with the MERN
                                    stack, which uses the language across the stack. I find JS extremely flexible and
                                    expressive. I
                                    particularly make use of Functional Programming and Object-as-datastructure
                                    features. I have started
                                    to dip my toes into TypeScript as a method of organization, but for fast,
                                    prototyping development, I
                                    find JS extremely useful.
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
                                    money into ultralight backpacking, <a href="https://lighterpack.com/r/73c46t">here
                                    is my
                                    lighterpack.</a> To go along with long distance hiking, I've been a runner for most
                                    of
                                    my life. I am
                                    a specialty coffee drinker and daily home-espresso maker. I use a manual espresso
                                    press
                                    and
                                    grinder, and I prefer Ethiopian natural process coffees. I play a host of musical
                                    instruments,
                                    mostly guitar, where I study the <a
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