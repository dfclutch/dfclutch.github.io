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
                                    I love working in JavaScript. In my personal work, I build webapps with the MERN
                                    stack. The
                                    Functional Programming and Object-as-datastructure features in particular make
                                    JavaScript my
                                    favorite language. I have started to dip my toes into TypeScript as a method of
                                    organization, but
                                    for fast development, I find JS extremely useful. I am a follower of the Robert C.
                                    Martin
                                    Clean Code
                                    philosophy, and approach writing software with professionalism, maintainability, and
                                    extensibility
                                    in mind. Also within computer science I study network science, particularly network
                                    visualization
                                    and spectral graph theory. My specialization at OSU is in Artificial Intelligence. I
                                    have
                                    taken
                                    classes on many sub-fields within AI though I most enjoyed studying Neural Networks
                                    with one
                                    of
                                    OSU's top researching Professors, <a
                                    href="https://web.cse.ohio-state.edu/~wang.77/">Prof.
                                    Deliang
                                    Wang.</a>
                                </p>
                            </div>
                        ), (
                            <div>
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
                        ), (
                            <p>
                                Hello world
                            </p>
                        )
                        ]
                    }/>
            </div>
        );
    }
}

export default AboutContent