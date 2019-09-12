/*
	Constructor and Functions for using Finite State Automata

	Author: Dan Filler 9.2019
*/

function Automata(state) {
    this.Q = [];
    this.D = [];
    this.F = [];
    this.E = [0 , 1];
    this.next_state_index = 1;
    this.new_transition = {};
    this.Q.push(new QState(
        0,
        {
            x: 40,
            y: state.canvas.height / 2
        }
    ));

    this.q0 = this.Q[0];

    this.draw = () => {
        graphics.clear_canvas(state.canvas, state.context);
        this.D.forEach(transition => {
            transition.draw();
        });
        this.Q.forEach(q_state => {
            q_state.draw();

            if (q_state.equals(this.q0)) {
                q_state.draw_border(COLORS.GREEN, -1);
            }

            this.F.forEach(f => {
                if (f.equals(q_state)) q_state.draw_border(COLORS.BLACK, 1);
            });
        });
    };

    this.click = click;

    this.next_state = (input) => {
        return input;
    };
}