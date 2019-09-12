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
        let new_node = _clicked_node(coord);
        if (!new_node) {
            return;
        }
        if (state.automata.new_transition.start) {
            state.automata.new_transition.end = new_node;
            let transition = new Transition(state.automata.new_transition);
            state.automata.D.push(transition);
            state.automata.new_transition = {};
            console.log('D: ', state.automata.D);
            state.automata.draw();
        } else {
            state.automata.new_transition.start = new_node;
            console.log('start: ', state.automata.new_transition.start);
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

        if (!state.automata.F.includes(clicked_node)) {
            state.automata.F.push(clicked_node);
        }
        state.automata.draw();
    }

};