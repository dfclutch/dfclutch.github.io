/*
	Constructor and functions for Automata State type

	Author: Dan Filler 9.2019

*/

function QState(index, coord) {
	this.label = `q${index + 1}`
	this.coord = {
		x: coord.x,
		y: coord.y
	}
	this.index = index;
	this.draw = () => {
		state.context.beginPath();
        state.context.arc(this.coord.x, this.coord.y, 30, 0, 2 * Math.PI);
       	state.context.stroke();
       	
        state.context.beginPath();
        state.context.font = '20px sans-serif';
		state.context.fillStyle = "#dd0000";
        state.context.textAlign = "center";
        state.context.fillText(this.label, this.coord.x, this.coord.y);
	}
}