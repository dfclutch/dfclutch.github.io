/*
*   Graphics and animation engine for graph visualizations
*
*   Author: Dan Filler 6.2019
 */

function animate() {
    return new Promise((res) => {
        state.animation_handler = animation_handler(res);
        state.currently_animating = true;
        state.animation_timer = setInterval(state.animation_handler, state.speed);
    });
}

function animation_handler (res) {
    return async () => {
        if (state.frames.length === 0 && state.currently_animating) {
            state.currently_animating = false;
            await end_animation();
            res();
        } else if (state.currently_animating) {
            clear_canvas();
            draw_graph(state.graph);
            state.old_frames.push(state.frames[0]);
            draw_graph(state.frames.shift());
        }
    }
}

/*
*   Draw A Graph Object
 */
function draw_graph(graph) {
    draw_edges(graph.edges);
    draw_nodes(graph.nodes);
}

function draw_nodes(nodes) {
    nodes.forEach((node) => {
        node.draw();
    });
}

function draw_edges(edges) {
    edges.forEach((edge) => {
        edge.draw();
    });
}


function clear_canvas() {
    state.context.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT);
    state.context.beginPath();
}

/*
* ends currently running animation for updates
*/
function end_animation() {
    state.currently_animating = false;
    clearInterval(state.animation_timer);
    //store old frames
    state.old_frames = state.old_frames.concat(state.frames);
    state.frames = [];
}

function pause_animation() {
    state.currently_animating = false;
    clearInterval(state.animation_timer);
}

function continue_animation() {
    state.currently_animating = true;
    state.animation_timer = setInterval(state.animation_handler, state.speed);
}
