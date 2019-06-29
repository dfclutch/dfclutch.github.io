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
    const currently_animating = false;

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
        currently_animating,

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
        if (prop === STATE_PROPERTIES.SPEED) update_elements.speed.value = 500 - state.speed;
    });
}

function special_updates(prop_to_update) {
    switch (prop_to_update) {
        case STATE_PROPERTIES.BRANCHING_FACTOR:
            if (state.graph_type === GRAPH_TYPES.TREE) {
                update_elements.branching_factor.max = 9;
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
        case STATE_PROPERTIES.DENSITY:
            if (state.graph_type !== GRAPH_TYPES.TREE) {
                state.density = update_elements.density.valueAsNumber;
                clear_canvas();
                state.graph.a_matrix = generate.a_matrix.undirected_simple(state.branching_factor, state.depth);
                state.graph.edges = generate.edges(state.graph.a_matrix, state.graph.nodes);
                draw_graph(state.graph);
            }
            break;
        case STATE_PROPERTIES.SPEED:
            state.speed = 500 - update_elements.speed.valueAsNumber;
            break;
        case STATE_PROPERTIES.NODE_SIZE:
            clear_canvas();
            draw_graph(state.graph);
            break;
        case STATE_PROPERTIES.GRAPH_TYPE:
            end_animation();
            update_elements.graph_type.forEach((option) => {
                if (option.checked) state.graph_type = option.value;
            });
            if (state.graph_type === GRAPH_TYPES.TREE)
            {
                special_updates(STATE_PROPERTIES.BRANCHING_FACTOR);
            } else {
                update_elements.depth.max = 20;
                update_elements.depth.value = state.depth = 6;
                update_elements.branching_factor.max = 20;
                update_elements.branching_factor.value = state.branching_factor = 6;
            }
            state.graph = new Graph(state);
            clear_canvas();
            draw_graph(state.graph);
            break;
    }
}

function update(prop_to_update) {
    end_animation();
    state[prop_to_update] = update_elements[prop_to_update].valueAsNumber;

    special_updates(prop_to_update);
    set_sliders(state);

    if (STOPPING_PROPERTIES.includes(prop_to_update)) {
        clear_canvas();
        end_animation();
        state.currently_animating = false;
        state.graph = new Graph(state);
        draw_graph(state.graph);
    } else {
        if (state.currently_animating === true) {
            animate();
        }
    }

    update_buttons(state);
}
