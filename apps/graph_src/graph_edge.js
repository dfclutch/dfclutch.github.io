/*
* Model and functions for GraphEdge object
*
* Author: Dan Filler 6.26.2019
 */

function GraphEdge(start, end, color, text) {
    this.coords = {
        start: start.coord,
        end: end.coord
    };
    this.nodes = {
        start: start,
        end: end
    };
    this.color = color || COLORS.BLACK;
    this.text = text || '';

    this.draw = () => {
        state.context.beginPath();
        state.context.strokeStyle = this.color || COLORS.BLACK;
        if (state.context.strokeStyle !== COLORS.BLACK) {
            state.context.lineWidth = 2;
        } else if (this.weight) {
            state.context.lineWidth = this.weight / EDGE_WEIGHT_REDUCTION_FACTOR;
        } else {
            state.context.lineWidth = .2;
        }
        state.context.moveTo(this.coords.start.x, this.coords.start.y); //TODO: Check if this works with spread operator
        state.context.lineTo(this.coords.end.x, this.coords.end.y);
        state.context.stroke();
        state.context.closePath();
        if (this.text !== '') {
            state.context.beginPath();
            state.context.font = (state.node_size * 3).toString() + "px Arial";
            state.context.textAlign = "center";
            state.context.fillText(
                this.text.toString(), Math.floor((this.coords.start.x + this.coords.end.x) / 2) - 10,
                Math.floor((this.coords.start.y + this.coords.end.y) / 2)
            );
        }
        if(state.graph_type !== GRAPH_TYPES.DIR_SIMPLE) return;
        /*
            Draw Arrow
         */
        let p1 = this.coords.start;
        let p2 = {
            x: (this.coords.start.x * .5 + this.coords.end.x * 1.5) / 2,
            y: (this.coords.start.y * .5+ this.coords.end.y * 1.5) / 2,
        };

        let L1 = graphics.euclid_dist(p1, p2);
        let L2 = EDGE_ARROW_LENGTH;

        let theta = EDGE_ARROW_ANGLE * Math.PI / 180;

        let p3 = {
            x: (p2.x + L2 / L1 * ((p1.x - p2.x) * Math.cos(theta) + (p1.y - p2.y) * Math.sin(theta))),
            y: (p2.y + L2 / L1 * ((p1.y - p2.y) * Math.cos(theta) - (p1.x - p2.x) * Math.sin(theta))),
        };

        let p4 = {
            x: (p2.x + L2 / L1 * ((p1.x - p2.x) * Math.cos(theta) - (p1.y - p2.y) * Math.sin(theta))),
            y: (p2.y + L2 / L1 * ((p1.y - p2.y) * Math.cos(theta) + (p1.x - p2.x) * Math.sin(theta))),
        };

        state.context.beginPath();
        state.context.strokeStyle = this.color || COLORS.BLACK;
        state.context.moveTo(p2.x, p2.y);
        state.context.lineTo(p3.x, p3.y);
        state.context.stroke();
        state.context.moveTo(p2.x, p2.y);
        state.context.lineTo(p4.x, p4.y);
        state.context.stroke();
        state.context.closePath();
    };
    this.equals = (edge) => {
        return (this.nodes.start.index === edge.nodes.start.index && this.nodes.end.index === edge.nodes.end.index)
    };

    this.euclid_dist = euclid_dist(start, end);
}

function euclid_dist (start, end) {
    return start.distance_to(end);
}