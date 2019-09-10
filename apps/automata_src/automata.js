/*
	Constructor and Functions for using Finite State Automata

	Author: Dan Filler 9.2019
*/

function Automata(state) {
	this.Q = [];
	this.D = [];
	this.Q_open = true;
	this.D_open = false;
	this.Q.push (new QState(
		0,
		{
			x: 40,
			y: state.canvas.height / 2
		}
	));
	
	this.draw = () => {
		graphics.clear_canvas(state.canvas, state.context);
		this.Q.forEach(q_state => {
			q_state.draw();
		});
	};

	this.add_state = (coord) => {
		let new_state = new QState(
			this.Q.length,
			coord
		);
		this.Q.push(new_state);
		this.draw();
	};

	this.toggle_lock_Q = () => {
		this.Q_open = !this.Q_open;
	};

	this.toggle_lock_d = () => {
		this.D_open = !this.D_open;
	};

	this.next_state = (input) => {
		return input;
	}
}


