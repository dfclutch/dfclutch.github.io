/*
*   Set up and handling of button presses
*
*   Author: Dan Filler 6.2019
 */

const algorithm_buttons = {
    btn_1: document.getElementById('btn_1'),
    btn_2: document.getElementById('btn_2'),
    btn_3: document.getElementById('btn_3'),
    btn_4: document.getElementById('btn_4'),
};
const new_graph = document.getElementById('new_graph')
new_graph.addEventListener('click', () => {
    state.graph = new Graph(state);
    draw_graph(state.graph);
});

function update_buttons(state) {
    Object.keys(algorithm_buttons).forEach((btn_name, ind) => {
        let button = algorithm_buttons[btn_name];
        //clear_event_listeners(button);
        button.addEventListener('click', () => {
            end_animation();
            clear_canvas();
            draw_graph(state.graph);
        });
        let algorithm_name = Object.keys(ALGORITHMS[state.graph_type])[ind];
        if (algorithm_name) {
            let algorithm = ALGORITHMS[state.graph_type][algorithm_name];
            let animatorFunction = algorithm.animator;
            let animatorName = algorithm.name;
            button.addEventListener('click', () => {animatorFunction()});
            button.value = animatorName;
        } else {
            button.value = NO_ACTION;
        }
    });
}