/*
    Data structure for transitions in finite automata

    Author: Dan Filler
 */
let trans_index = 0;
const ARROW_LENGTH = 10;
const ARROW_ANGLE = 30;

function Transition(states) {
    this.index = trans_index;
    this.label = 'aaa';
    trans_index++;

    this.states = states; //important to pass these in as states to keep information local to transition
    this.centerpoint = graphics.centerpoint(states.start.coord, states.end.coord);

    this.draw = () => {
        state.context.beginPath();
        state.context.strokeStyle = "#000";

        state.context.moveTo(this.states.start.coord.x, this.states.start.coord.y);
        state.context.lineTo(this.states.end.coord.x, this.states.end.coord.y);
        state.context.stroke();
        state.context.closePath();

        this.draw_arrow();
        this.draw_text();
    };

    this.draw_arrow = () => {
        let p2 = {
            x: (this.states.start.coord.x + this.states.end.coord.x) / 2,
            y: (this.states.start.coord.y + this.states.end.coord.y) / 2
        };
        let p1 = this.states.start.coord;

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
    };

    this.draw_text = () => {
        let text = this.label;
        let coord = new Coord(this.centerpoint.x, this.centerpoint.y + TEXT_OFFSET);
        graphics.text(text, coord);
    }
}

function draw_self_loop () {
    state.context.beginPath();
    state.context.strokeStyle = COLORS.BLACK;
    state.context.arc(this.nodes.start.coord.x, (this.nodes.start.coord.y - 20), NODE_RADIUS, 0, 2 * Math.PI);
    state.context.stroke();

    state.context.beginPath();
    state.context.font = '20px sans-serif';
    state.context.fillStyle = COLORS.RED;
    state.context.textAlign = "center";
    state.context.fillText(this.label, this.coord.x, this.coord.y);
}