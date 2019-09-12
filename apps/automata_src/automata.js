/*
	Constructor and Functions for using Finite State Automata

	Author: Dan Filler 9.2019
*/

function Automata(state) {
    this.Q = [];
    this.D = [];
    this.F = [];
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

const _clicked_node = (coord) => {
    return state.automata.Q.filter(q_state => _click_did_hit(coord, q_state))[0];
};

const _click_did_hit = (coord, q_state) => {
    const in_x_range = coord.x < q_state.coord.x + NODE_RADIUS && coord.x > q_state.coord.x - NODE_RADIUS;
    const in_y_range = coord.y < q_state.coord.y + NODE_RADIUS && coord.y > q_state.coord.y - NODE_RADIUS;
    return in_x_range && in_y_range;
};

function get_click_coord_in_canvas(event) {
    const rect = state.canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {
        x,
        y
    };
}