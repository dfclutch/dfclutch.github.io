const state = {};

function initCanvas() {
    state.canvas.addEventListener('mousedown', (e) => {
        state.automata.click[state.click_mode](graphics.get_click_coord_in_canvas(e));
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