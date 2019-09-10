/*
	Constructor and Functions for using Finite State Automata

	Author: Dan Filler 9.2019
*/

function Automata(state) {
	this.Q = [];
	this.D = [];
	this.Q_open = true;
	this.D_open = false;
	this.next_state_index = 1;
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
		this.D.forEach(transition => {
			transition.draw();
		});
	};

	this.add_state = (coord) => {
		let new_state = new QState(
			this.next_state_index,
			coord
		);
		this.next_state_index++;
		this.Q.push(new_state);
		this.draw();
	};

	this.delete_state = (coord) => {
		state.automata.Q = state.automata.Q.filter(q_state => {
			const in_x_range = coord.x < q_state.coord.x + NODE_RADIUS && coord.x > q_state.coord.x - NODE_RADIUS;
			const in_y_range = coord.y < q_state.coord.y + NODE_RADIUS && coord.y > q_state.coord.y - NODE_RADIUS;
			return !(in_x_range && in_y_range);
		});
		console.log(state.automata.Q);
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


