const state = {};

function initCanvas() {
    state.canvas.addEventListener('mousedown', (e) => {
        if (state.click_mode === CLICK_MODES.add_nodes) {
            state.automata.add_state(graphics.get_click_coord_in_canvas(e));
        } else if (state.click_mode === CLICK_MODES.add_transitions) {
            state.automata.add_transition(graphics.get_click_coord_in_canvas(e));
        } else if (state.click_mode === CLICK_MODES.delete) {
            state.automata.delete_state(graphics.get_click_coord_in_canvas(e));
        } else {
            console.log('error: state click mode is not one of the allowed states')
        }
    });
}

function initApp() {
    Object.assign(state, initState());
    initCanvas();
    state.automata.draw();
}

window.onload = () => {
    initApp();
};