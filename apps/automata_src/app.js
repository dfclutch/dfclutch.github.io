const state = {};

function initCanvas() {
    state.canvas.addEventListener('mousedown', (e) => {
        if(state.automata.Q_open) {
            state.automata.add_state(get_click_coord_in_canvas(e));
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