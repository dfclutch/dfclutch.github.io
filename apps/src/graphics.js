/*
*   Graphics and animation engine for graph visualizations
*
*   Author: Dan Filler 6.2019
 */

function animate() {
    state.currently_animating = true;
    state.animation_timer = setInterval(() => {
        if(state.frames.length === 0) {
            state.currently_animating = false;
            end_animation();
        } else {
            clear_canvas();
            draw_graph(state.graph);
            draw_graph(state.frames.shift());
        }
    }, state.speed);
}

/*
*   Draw A Graph Object
 */
function draw_graph(graph) {
    graph.edges.forEach((edge) => {
        edge.draw();
    });

    graph.nodes.forEach((node) => {
        node.draw();
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
}

function pause_animation() {
    clearInterval(state.animation_timer);
}