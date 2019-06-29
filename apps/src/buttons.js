/*
*   Set up and handling of button presses
*
*   Author: Dan Filler 6.2019
 */

const buttons = {
    btn_1: document.getElementById('btn_1'),
    btn_2: document.getElementById('btn_2'),
    btn_3: document.getElementById('btn_3'),
    btn_4: document.getElementById('btn_4'),
};

function update_buttons(state) {
    Object.keys(buttons).forEach((btn_name, ind) => {
        let button = buttons[btn_name];
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
            button.addEventListener('click', () => {
                animatorFunction();
            });
            button.value = animatorName;
        }
    });
}