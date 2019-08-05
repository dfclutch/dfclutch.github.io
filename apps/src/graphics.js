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
    return () => {
        if (state.frames.length === 0) {
            state.currently_animating = false;
            end_animation();
            res();
        } else {
            clear_canvas();
            draw_graph(state.graph);
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
    clearInterval(state.animation_timer);
    state.frames = [];
}

function pause_animation() {
    clearInterval(state.animation_timer);
}

function continue_animation() {
    state.animation_timer = setInterval(state.animation_handler, state.speed);
}
