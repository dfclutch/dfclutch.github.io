/*
* Model and functions for GraphEdge object
*
* Author: Dan Filler 6.26.2019
 */

function GraphEdge(start, end, color, text) {
    this.coords = {
        start,
        end
    };
    this.color = color || COLORS.BLACK;
    this.text = text || '';

    this.draw = () => {
        state.context.beginPath();
        state.context.strokeStyle = this.color || COLORS.BLACK;
        if (state.context.strokeStyle !== COLORS.BLACK) {
            state.context.lineWidth = 2;
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
    }
}