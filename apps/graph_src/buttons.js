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
    btn_5: document.getElementById('btn_5'),

};
const new_graph_element = document.getElementById('new_graph');
new_graph_element.addEventListener('click', () => {
    clear_canvas();
    end_animation();
    state.frames.length = 0;
    state.graph = new Graph(state);
    draw_graph(state.graph);
});

const clear_graph_element = document.getElementById('clear_graph');
clear_graph_element.addEventListener('click', () => {
    clear_canvas();
    end_animation();
    draw_graph(state.graph);
});

const pause_animation_element = document.getElementById('pause_animation');
pause_animation_element.addEventListener('click', () => {
    pause_animation();
});

const start_animation_element = document.getElementById('start_animation');
start_animation_element.addEventListener('click', () => {
    continue_animation();
});

function update_buttons(state) {
    Object.keys(algorithm_buttons).forEach((btn_name, ind) => {
        let button = $(`#${btn_name}`);
        button.off('click');
        button.bind('click', () => {
            end_animation();
            clear_canvas();
            draw_graph(state.graph);
        });
        let algorithm_name = Object.keys(ALGORITHMS[state.graph_type])[ind];
        if (algorithm_name) {
            let algorithm = ALGORITHMS[state.graph_type][algorithm_name];
            let animatorFunction = algorithm.animator;
            let animatorName = algorithm.name;
            button.bind('click', () => {
                animatorFunction()
            });
            button.val(animatorName);
        } else {
            button.val(NO_ACTION);
        }
    });
}