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

            if(q_state.equals(this.q0)) {
                q_state.draw_border(COLORS.GREEN)
            }
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
        state.automata.Q = state.automata.Q.filter(q_state => !this._click_did_hit(coord, q_state));

        this.draw();
    };

    this.add_transition = (coord) => {
        let new_node = this._clicked_node(coord);
        if (!new_node) {
            return;
        }

        if (this.new_transition.start) {
            this.new_transition.end = new_node;
            let transition = new Transition(this.new_transition);
            this.D.push(transition);
            this.new_transition = {};
            console.log('D: ', this.D);
            this.draw();
        } else {
            this.new_transition.start = new_node;
            console.log('start: ', this.new_transition.start);
        }
    };

    this.change_q0 = (coord) => {
        let clicked_node = this._clicked_node(coord);
        if (!clicked_node) { return; }

        this.q0 = clicked_node;
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
    };

    this._clicked_node = (coord) => {
        return state.automata.Q.filter(q_state => this._click_did_hit(coord, q_state))[0];
    };

    this._click_did_hit = (coord, q_state) => {
        const in_x_range = coord.x < q_state.coord.x + NODE_RADIUS && coord.x > q_state.coord.x - NODE_RADIUS;
        const in_y_range = coord.y < q_state.coord.y + NODE_RADIUS && coord.y > q_state.coord.y - NODE_RADIUS;
        return in_x_range && in_y_range;
    };
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