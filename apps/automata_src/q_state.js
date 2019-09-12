/*
	Constructor and functions for Automata State type

	Author: Dan Filler 9.2019

*/

function QState(index, coord) {
	this.label = `q${index + 1}`;
	this.coord = {
		x: coord.x,
		y: coord.y
	};
	this.index = index;
	this.draw = (color) => {
		state.context.beginPath();
		state.context.strokeStyle = color || COLORS.BLACK;
        state.context.arc(this.coord.x, this.coord.y, NODE_RADIUS, 0, 2 * Math.PI);
       	state.context.stroke();
       	
        state.context.beginPath();
        state.context.font = '20px sans-serif';
		state.context.fillStyle = COLORS.RED;
        state.context.textAlign = "center";
        state.context.fillText(this.label, this.coord.x, this.coord.y);
	};
	this.draw_border = (color) => {
		state.context.beginPath();
		state.context.strokeStyle = color;
		state.context.arc(this.coord.x, this.coord.y, NODE_RADIUS + NODE_BORDER_OFFSET, 0, 2 * Math.PI);
		state.context.stroke();
	};
	this.equals = (q_state) => {
		return this.index === q_state.index;
	};
}