let state = {}

const page_elements = {branching_factor: {max: 10}, depth: {max : 10}};

function run_bfs() {
    const graph_type = GRAPH_TYPES.UND_SIMPLE;
    const branching_factor = 8;
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

    state = {
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


    draw_graph(state.graph);

    ALGORITHMS[GRAPH_TYPES.UND_SIMPLE].bfs.animator(false);
}

window.onload = () => {
	run_bfs();
}