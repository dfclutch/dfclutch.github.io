import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from "../Carousel/carousel";

class ProjectsContent extends React.Component {
    render() {
        return (
            <div>
                <Carousel
                    slides={
                        [(
                            <div>
                                <h4>Covid-19 SAIRD Simulation</h4>
                                <p>
                                    <a href="http://dfclutch.github.io/apps/epsim" target="_blank">Link</a><br/>
                                    After studying epidemic modeling in my Network Science class, I created my own
                                    variant of a classic model to better fit what we know about covid-19. I also created
                                    an interactive visuallization of the model. Users can tweak parameters of the
                                    disease and the population to see what is most important about keeping the numbers
                                    low. I used D3js for the graphics portion and hosted the simulation through github.
                                </p>
                            </div>
                        ), (
                            <div>
                                <h4>D3 Network Generation Models</h4>
                                <p>
                                    <a href="http://dfclutch.github.io/apps/d3" target="_blank">Link</a><br/>
                                    A series of generation models created using the <a href="http://d3js.org">D3JS
                                    visualization
                                    library.</a> Completed as a way to learn the library, the webpage illustrates the
                                    larger structures
                                    exhibited by different ways of producing random networks.
                                </p>
                            </div>
                        ), (
                            <div>
                                <h4>JavaDocs</h4>
                                <p>
                                    <a href="http://java-docs.herokuapp.com" target="_blank">Link</a><br/>
                                    A MERN-stack application for documenting complex coffee recipes. I implemented a
                                    basic REST server offering
                                    CRUD capability for recipes. The app is deployed through Heroku, though because it's
                                    the free version, it
                                    may take a few seconds for the page to appear if you click the link above.
                                </p>
                            </div>
                        ), (
                            <div>
                                <h4>Graph Algorithms</h4>
                                <p>
                                    <a href="http://dfclutch.github.io/apps/graphs" target="_blank">Link</a><br/>
                                    A fully vanilla JS webpage (okay, I use jQuery in 1 place) for animating graph
                                    algorithms. The graph types
                                    and sizes are tweakable, and the graphs and algorithms that run on them are not
                                    pre-animated, rather they
                                    are computed live on request and animated. The biggest contribution of this website
                                    is the <em>Soft KNN </em>
                                    Geometric graph generation model that I developed for generating good-looking random
                                    complex network graphs.
                                </p>
                            </div>
                        )]
                    }
                />
            </div>
        );
    }
}

export default ProjectsContent