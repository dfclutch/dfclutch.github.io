/*
*	State tracking for graph, page, and animation information
*
*	Author: Dan Filler 6.2019
*/

function initState() {
    /* graph information */
    const graph_type = GRAPH_TYPES.TREE;
    const branching_factor = 2;
    const depth = 6;
    const density = 2;
    const graph = {};

    /* animation information */
    const frames = [];
    const animation_timer = null;
    const speed = 100;
    const node_size = 4;

    /* canvas information */
    const canvas = document.getElementById("viewport");
    const context = canvas.getContext('2d');

    let state = {
        graph_type,
        branching_factor,
        depth,
        density,
        graph,

        frames,
        animation_timer,
        speed,
        node_size,

        canvas,
        context
    };

    state.graph = new Graph(state);

    set_sliders(state);

    return state;
}

function set_sliders(state) {
    Object.keys(state).forEach((prop) => {
        if (update_elements.hasOwnProperty(prop)) update_elements[prop].value = state[prop];
    });
}

function special_updates(prop_to_update) {
    switch (prop_to_update) {
        case STATE_PROPERTIES.BRANCHING_FACTOR:
            if (state.graph_type === GRAPH_TYPES.TREE) {
                if (state.branching_factor === 2) {
                    update_elements.depth.max = 9;
                    update_elements.depth.value = state.depth = 6;
                } else if (state.branching_factor === 3) {
                    update_elements.depth.max = 6;
                    update_elements.depth.value = state.depth = 3;
                } else if (state.branching_factor > 3) {
                    update_elements.depth.max = 3;
                    update_elements.depth.value = state.depth = 2;
                }
            }
            break;
        case STATE_PROPERTIES.DEPTH:
            break;
    }
}

function update(prop_to_update) {
    end_animation();
    clear_canvas();
    state[prop_to_update] = update_elements[prop_to_update].valueAsNumber;

    special_updates(prop_to_update);
    set_sliders(state);

    if (STOPPING_PROPERTIES.includes(prop_to_update)) {
        state.graph = new Graph(state);
        draw_graph(state.graph);
    } else {
        animate();
    }
}
