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
    const density = 4;
    const graph = {};

    /* animation information */
    const frames = [];
    const old_frames = [];
    const last_animation = null;
    const animation_timer = null;
    const animation_handler = null;
    const speed = 100;
    const node_size = 6;
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
        old_frames,
        last_animation,
        animation_timer,
        animation_handler,
        speed,
        node_size,
        currently_animating,

        canvas,
        context
    };

    state.graph = new Graph(state);

    set_sliders(state);
    set_radio_buttons(state);
    return state;
}

function set_sliders(state) {
    Object.keys(state).forEach((prop) => {
        if (page_elements.hasOwnProperty(prop)) page_elements[prop].value = state[prop];
        if (prop === STATE_PROPERTIES.SPEED) page_elements.speed.value = 500 - state.speed;
    });
}

function set_radio_buttons(state) {
    page_elements.graph_type.forEach((option) => {
        option.checked = (state.graph_type === option.value);
    })
}

function update(prop_to_update) {
    pause_animation();
    switch (prop_to_update) {
        case STATE_PROPERTIES.BRANCHING_FACTOR:
            //clear stored animations when getting a new graph;
            state.last_animation = null;
            end_animation();
            clear_canvas();
            state.branching_factor = page_elements.branching_factor.valueAsNumber;
            if (state.graph_type === GRAPH_TYPES.TREE) {
                animator_utils.tree.set_d_and_b();
            }
            state.graph = new Graph(state);
            update_buttons(state);
            draw_graph(state.graph);
            break;
        case STATE_PROPERTIES.DEPTH:
            //clear stored animations when getting a new graph;
            state.last_animation = null;
            end_animation();
            clear_canvas();
            state.depth = page_elements.depth.valueAsNumber;
            state.graph = new Graph(state);
            update_buttons(state);
            draw_graph(state.graph);
            break;
        case STATE_PROPERTIES.DENSITY:
            //clear stored animations when getting a new graph;
            state.last_animation = null;
            state.density = page_elements.density.valueAsNumber;
            if (state.graph_type !== GRAPH_TYPES.TREE) {
                end_animation();
                clear_canvas();
                state.density = page_elements.density.valueAsNumber;
                state.graph.a_matrix = generate.a_matrix[state.graph_type](state.branching_factor, state.depth, state.graph.nodes);
                state.graph.edges = generate.edges[state.graph_type](state.graph);
                reset_output_text();
                update_buttons(state);
                draw_graph(state.graph);
            }
            break;
        case STATE_PROPERTIES.NODE_SIZE:
            clear_canvas();
            state.node_size = page_elements.node_size.valueAsNumber;
            draw_graph(state.graph);
            continue_animation();
            break;
        case STATE_PROPERTIES.SPEED:
            state.speed = 500 - page_elements.speed.valueAsNumber;
            continue_animation();
            break;
        case STATE_PROPERTIES.GRAPH_TYPE:
            end_animation();
            reset_output_text();
            //clear stored animations when getting a new graph;
            state.last_animation = null;
            page_elements.graph_type.forEach((option) => {
                if (option.checked) state.graph_type = option.value;
            });
            if (state.graph_type === GRAPH_TYPES.TREE) {
                state.branching_factor = page_elements.branching_factor.value = 2;
                update(STATE_PROPERTIES.BRANCHING_FACTOR);
            } else if (state.graph_type === GRAPH_TYPES.NETWORK_FLOW) {
                state.branching_factor = page_elements.branching_factor.value = 2;
                page_elements.depth.value = state.depth = 4;
                page_elements.depth.max = page_elements.branching_factor.max = 5;
            } else if (state.graph_type === GRAPH_TYPES.COMPLETE) {
                page_elements.branching_factor.value = state.branching_factor = 5;
                page_elements.depth.value = state.depth = 5;
                page_elements.depth.max = page_elements.branching_factor.max = 8;
            } else if (state.graph_type === GRAPH_TYPES.DIR_SIMPLE) {
                page_elements.depth.max = 12;
                page_elements.depth.value = state.depth = 6;
                page_elements.branching_factor.max = 12;
                page_elements.branching_factor.value = state.branching_factor = 6;
            } else {
                page_elements.depth.max = 12;
                page_elements.depth.value = state.depth = 6;
                page_elements.branching_factor.max = 12;
                page_elements.branching_factor.value = state.branching_factor = 6;
            }
            state.graph = new Graph(state);
            set_sliders(state);
            update_buttons(state);
            clear_canvas();
            draw_graph(state.graph);
            break;
    }
}
