/*
    Data structure for transitions in finite automata

    Author: Dan Filler
 */
let trans_index = 0;
const ARROW_LENGTH = 10;
const ARROW_ANGLE = 30;

function Transition(nodes) {
    this.index = trans_index;
    trans_index++;

    this.nodes = nodes;

    this.draw = () => {
        state.context.beginPath();
        state.context.strokeStyle = "#000";

        state.context.moveTo(this.nodes.start.coord.x, this.nodes.start.coord.y);
        state.context.lineTo(this.nodes.end.coord.x, this.nodes.end.coord.y);
        state.context.stroke();
        state.context.closePath();

        this.draw_arrow()
    };

    this.draw_arrow = () => {
        let p2 = {
            x: (this.nodes.start.coord.x + this.nodes.end.coord.x) / 2,
            y: (this.nodes.start.coord.y + this.nodes.end.coord.y) / 2
        };
        let p1 = this.nodes.start.coord;

        let L1 = graphics.euclid_dist(p1, p2);
        let L2 = ARROW_LENGTH;

        let theta = ARROW_ANGLE * Math.PI /  180;

        let p3 = {
            x: (p2.x + L2 / L1 * ((p1.x - p2.x) * Math.cos(theta) + (p1.y - p2.y) * Math.sin(theta))),
            y: (p2.y + L2 / L1 * ((p1.y - p2.y) * Math.cos(theta) - (p1.x - p2.x) * Math.sin(theta))),
        };

        let p4 = {
            x: (p2.x + L2 / L1 * ((p1.x - p2.x) * Math.cos(theta) - (p1.y - p2.y) * Math.sin(theta))),
            y: (p2.y + L2 / L1 * ((p1.y - p2.y) * Math.cos(theta) + (p1.x - p2.x) * Math.sin(theta))),
        };

        state.context.beginPath();
        state.context.strokeStyle = "#000";
        state.context.moveTo(p2.x, p2.y);
        state.context.lineTo(p3.x, p3.y);
        state.context.stroke();
        state.context.moveTo(p2.x, p2.y);
        state.context.lineTo(p4.x, p4.y);
        state.context.stroke();
        state.context.closePath();
    }
}