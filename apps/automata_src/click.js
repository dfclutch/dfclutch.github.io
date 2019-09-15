/*
    Click handling for State Automata

    Author: Dan Filler 9.2019
 */

const click = {
    [CLICK_MODES.add_states]: (coord) => {
        let new_state = new QState(
            state.automata.next_state_index,
            coord
        );
        state.automata.next_state_index++;
        state.automata.Q.push(new_state);
        state.automata.draw();
    },
    [CLICK_MODES.delete]: (coord) => {
        state.automata.Q = state.automata.Q.filter(q_state => !_click_did_hit(coord, q_state));

        state.automata.draw();
    },
    [CLICK_MODES.add_transitions]: (coord) => {
        let new_transition = state.automata.new_transition;
        let clicked_node = _clicked_node(coord);
        if (!clicked_node) {
            return;
        }
        if (new_transition.start) {
            new_transition.end = clicked_node;
            let transition = new Transition(new_transition);
            if (clicked_node.equals(new_transition.start)) {
                new_transition.draw = draw_self_loop;
            }

            state.automata.D.push(transition);

            new_transition.start.transitions.push(transition);
            state.automata.new_transition = {};
            state.automata.draw();
        } else {
            new_transition.start = clicked_node;
        }
    },
    [CLICK_MODES.change_q0]: (coord) => {
        let clicked_node = _clicked_node(coord);
        if (!clicked_node) {
            return;
        }

        state.automata.q0 = clicked_node;
        state.automata.draw();
    },
    [CLICK_MODES.add_final]: (coord) => {
        let clicked_node = _clicked_node(coord);
        if (!clicked_node) {
            return;
        }

        if (state.automata.F.includes(clicked_node)) {
            state.automata.F = state.automata.F.filter(q => !q.equals(clicked_node));
        } else {
            state.automata.F.push(clicked_node);
        }

        state.automata.draw();
    }

};

const _clicked_node = (coord) => {
    return state.automata.Q.filter(q_state => _click_did_hit(coord, q_state))[0];
};

const _click_did_hit = (coord, q_state) => {
    const in_x_range = coord.x < q_state.coord.x + NODE_RADIUS && coord.x > q_state.coord.x - NODE_RADIUS;
    const in_y_range = coord.y < q_state.coord.y + NODE_RADIUS && coord.y > q_state.coord.y - NODE_RADIUS;
    return in_x_range && in_y_range;
};