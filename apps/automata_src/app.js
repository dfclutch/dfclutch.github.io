const state = {};

window.onload = () => {
	Object.assign(state, initState());
	state.canvas.addEventListener('mousedown', (e) => {
        if(state.automata.Q_open) {
            state.automata.add_state(get_click_coord_in_canvas(e));
        }
        if(state.automata.Q.length > 5) {
        	state.automata.lock_Q();
        }
    });
	state.automata.draw();
}