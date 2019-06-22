/*
*   Graphics and animation engine for graph visualizations
*
*   Author: Dan Filler 6.2019
 */

function animate() {
    state.animation_timer = setInterval(() => {
        if (state.frames.length > 0) {
            clear_canvas();
            let current_frame = state.frames.shift();
            for (let i = 0; i < current_frame.node_components.nodes.length; i++) {
                draw_node(
                    current_frame.node_components.nodes[i],
                    current_frame.node_components.colors[i],
                    current_frame.node_components.text[i]
                );
            }

            for (let i = 0; i < current_frame.edge_components.edges.length; i++) {
                draw_edge(
                    current_frame.edge_components.edges[i][0],
                    current_frame.edge_components.edges[i][1],
                    current_frame.edge_components.colors[i],
                    current_frame.edge_components.text[i]
                );
            }

        } else {
            end_animation();
        }
    }, state.speed);
}

/*
*   Draw a still graph in all black to render before animations / at startup
 */
function draw_graph(graph) {
    graph.node_coords.forEach((node, ind) => {
        draw_node(
            node,
            COLORS.BLACK
        );
        const connected = graph.a_matrix[ind];
        connected.forEach((is_connected, connected_ind) => {
            if(is_connected === 1) {
                draw_edge(
                    node,
                    graph.node_coords[connected_ind],
                    COLORS.BLACK
                );
            }
        });
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

/*
* Draws a square in color centered at node [x, y] of side node_size x node_size
* in color with optional text
*
* - node:
*	(int, int) pair representing coordinate of the center of the square to be drawn
* - color:
*	string representing color in hex or rgba e.g. "#______" or "rgba{_,_,_,_}"
* - text:
*	optional: if typeof text == string: then node has text {text} attached
*	else: node has no text
*/
function draw_node(node, color, text) {
    state.context.beginPath();
    state.context.fillStyle = color || COLORS.BLACK;
    let min_x = node[0] - state.node_size;
    let min_y = node[1] - state.node_size;
    state.context.fillRect(min_x, min_y, state.node_size * 2, state.node_size * 2);
    if (typeof text != "undefined") {
        state.context.beginPath();
        state.context.font = `${(state.node_size * 3)} px Arial`;
        state.context.textAlign = "center";
        state.context.fillText(text, node[0] - 3 * state.node_size, node[1] + state.node_size);
    }
}

/*
* Draws an edge in color centered at from coordinates of node1 to node2 in color
* with optional text
*
* - node:
*	(int, int) pair representing coordinate of the center of the square to be drawn
* - color:
*	string representing color in hex or rgba e.g. "#______" or "rgba{_,_,_,_}"
* - text:
*	optional: if typeof text != string: then edge tries to have text {text} attached using
*	default .toString, if fails, sorry, should have used a string
*	else: edge has no text
*/
function draw_edge(node1, node2, color, text) {
    state.context.beginPath();
    if (color === COLORS.BLACK) {
        state.context.lineWidth = .2;
    } else {
        state.context.lineWidth = 2;
    }
    state.context.strokeStyle = color || COLORS.BLACK;
    state.context.moveTo(node1[0], node1[1]);
    state.context.lineTo(node2[0], node2[1]);
    state.context.stroke();
    if (typeof text != "undefined") {
        state.context.beginPath();
        state.context.font = (state.node_size * 3).toString() + "px Arial";
        state.context.textAlign = "center";
        state.context.fillText(
            text.toString(), Math.floor((node1[0] + node2[0]) / 2) - 10,
            Math.floor((node1[1] + node2[1]) / 2)
        );
    }
}