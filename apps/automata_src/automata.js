/*
	Constructor and Functions for using Finite State Automata

	Author: Dan Filler 9.2019
*/

function Automata(state) {
	this.Q = [];
	this.Q_open = true;
	this.Q.push (new QState(
		0,
		{
			x: 40,
			y: state.canvas.height / 2
		}
	));
	
	this.draw = () => {
		this.Q.forEach(q_state => {
			q_state.draw();
		});
	}

	this.add_state = (coord) => {
		let new_state = new QState(
			this.Q.length,
			coord
		);
		this.Q.push(new_state);
		this.draw();
	}

	this.lock_Q = () => {
		this.Q_open = false;
	}
}


function get_click_coord_in_canvas(event) {
	const rect = state.canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {
    	x,
    	y
    };
}