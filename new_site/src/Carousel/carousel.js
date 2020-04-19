import React from "react";

import "./carousel.scss";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_slide: this.props.slides[0]
        };
        this.slide_index = 0;
        this.next_slide = this.next_slide.bind(this);
        this.prev_slide = this.prev_slide.bind(this);
    }


    next_slide() {
        this.slide_index = (this.slide_index + 1) % this.props.slides.length;
        this.setState({
            current_slide: this.props.slides[this.slide_index]
        });
    }

    prev_slide() {
        this.slide_index--;
        if (this.slide_index < 0) {
            this.slide_index = this.props.slides.length - 1;
        }

        this.setState({
            current_slide: this.props.slides[this.slide_index]
        });
    }

    renderSlide() {
        return this.state.current_slide;
    }

    render () {
        return (
            <div id="carousel">
                {this.renderSlide()}
                <div id="next" onClick={this.next_slide}>
                    Next
                </div>
                <div id="prev" onClick={this.prev_slide}>
                    Prev
                </div>
            </div>
        );
    }
}

export  default Carousel