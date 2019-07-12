/*
*   Functions for generating various types of graphs. Implemented as layered objects. So to generate a tree the call
*   would look like generate.a_matrix.tree(branching_factor, depth)
*
*   Author: Dan Filler 6.2019
*/

const generate = {
    a_matrix: {
        [GRAPH_TYPES.TREE]: (b, d) => {
            const num_of_nodes = generate_utils.tree_num_of_nodes(b, d);

            let a_matrix = new Array(num_of_nodes);
            for (let parent = 0; parent < a_matrix.length; parent++) {
                let adjacents = new Array(num_of_nodes);
                let lowest_child = parent * b + 1;
                let highest_child = parent * b + b;

                for (let child = 0; child < adjacents.length; child++) {
                    if (child < num_of_nodes) {
                        if (child === parent) {
                            adjacents[child] = null;
                        } else if (child >= lowest_child && child <= highest_child) {
                            adjacents[child] = 1;
                        } else {
                            adjacents[child] = 0;
                        }
                    }
                }
                a_matrix[parent] = adjacents;
            }
            return a_matrix;
        },
        [GRAPH_TYPES.UND_SIMPLE]: (b, d) => {
            const num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            for (let parent = 0; parent < num_of_nodes; parent++) {
                let num_connected = chance.between(1, state.density) / 3;
                let count = esc = 0;
                while (count < num_connected && esc < num_of_nodes) {
                    let child = chance.between(0, num_of_nodes - 1);
                    if (child !== parent && a_matrix[parent][child] !== 1) {
                        a_matrix[parent][child] = 1;
                        a_matrix[child][parent] = 1;
                        count++;
                    }
                    esc++;
                }
            }
            return a_matrix;
        },
        [GRAPH_TYPES.DIR_SIMPLE]: (b, d) => {
            const num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            for (let parent = 0; parent < num_of_nodes; parent++) {
                let num_connected = chance.between(1, state.density);
                let count = esc = 0;
                while (count < num_connected && esc < num_of_nodes) {
                    let child = chance.between(0, num_of_nodes - 1);
                    if (child !== parent && a_matrix[parent][child] !== 1) {
                        a_matrix[parent][child] = 1;
                        count++;
                    }
                    esc++;
                }
            }
            return a_matrix;
        },
        [GRAPH_TYPES.NETWORK_FLOW]: (b, d) => {
            const num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            for (let parent = 0; parent < num_of_nodes; parent++) {
                let num_connected = chance.between(1, state.density);
                let count = esc = 0;
                while (count < num_connected && esc < num_of_nodes) {
                    let child = chance.between(0, num_of_nodes - 1);
                    if (child !== parent && a_matrix[parent][child] === 0) {
                        a_matrix[parent][child] = 1;
                        a_matrix[child][parent] = -1;
                        count++;
                    }
                    esc++;
                }
            }
            return a_matrix;
        }
    },
    nodes: {
        [GRAPH_TYPES.TREE]: (b, d) => {
            const nodes = [];

            let y_pos = CANVAS.OFFSET;
            let row_height = CANVAS.USABLE_HEIGHT / d;
            let num_in_row = 1;
            let index = 0;

            for (let row = 0; row < d + 1; row++) {
                for (let pos_in_row = 0; pos_in_row < num_in_row; pos_in_row++) {
                    let x_pos = Math.floor(CANVAS.USABLE_WIDTH * (pos_in_row + 1) / (num_in_row + 1) + CANVAS.OFFSET);
                    let current_node = new GraphNode(x_pos, y_pos, index);
                    nodes.push(current_node);
                    index++
                }
                num_in_row *= b;
                y_pos = Math.floor(y_pos + row_height);
            }
            return nodes;
        },
        [GRAPH_TYPES.UND_SIMPLE]: (b, d) => {
            const nodes = [];
            let num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            for (let i = 0; i < num_of_nodes; i++) {
                let x_pos = Math.floor((Math.random() * (state.canvas.width - 50) * 20 + 50) / 20);
                let y_pos = Math.floor((Math.random() * (state.canvas.height - 50) * 10 + 50) / 10);
                let current_node = new GraphNode(x_pos, y_pos, i);
                nodes.push(current_node);
            }
            return nodes;
        },
        [GRAPH_TYPES.DIR_SIMPLE]: (b, d) => {
            return(generate.nodes[GRAPH_TYPES.UND_SIMPLE](b,d));
        },
        [GRAPH_TYPES.NETWORK_FLOW]: (b, d) => {
            return(generate.nodes[GRAPH_TYPES.UND_SIMPLE](b,d));
        }
    },
    edges: {
            standard: (graph) => {
                let matrix = graph.a_matrix;
                let nodes = graph.nodes;
                let edges = [];
                matrix.forEach((parent_vector, parent_index) => {
                    parent_vector.forEach((is_connected, child_index) => {
                        if (is_connected === 1) {
                            if (matrix[child_index][parent_index] === 1) matrix[child_index][parent_index] = -1;
                            let new_edge = new GraphEdge(nodes[parent_index], nodes[child_index], COLORS.BLACK);
                            edges.push(new_edge);
                        } else if (is_connected === -1) {
                            //this is done to not create duplicated edges when I want single bidirectional edges
                            matrix[parent_index][child_index] = 1
                        }
                    });
                });
                return edges
            },
            [GRAPH_TYPES.TREE]: (graph) => {return generate.edges.standard(graph)},
            [GRAPH_TYPES.UND_SIMPLE]: (graph) => {return generate.edges.standard(graph)},
            [GRAPH_TYPES.DIR_SIMPLE]: (graph) => {return generate.edges.standard(graph)},
            [GRAPH_TYPES.NETWORK_FLOW]: (graph) => {
                let edges = generate.edges.standard(graph);
                edges.forEach((edge) => {
                    edge.weight = chance.between(1, MAX_FLOW_CAP);
                    edge.flow = 0;
                    edge.cap = () => {
                        return edge.weight - edge.flow;
                    }
                });
                return edges;
            }
    },
};

const generate_utils = {
    tree_num_of_nodes: (b, d) => {
        return (Math.pow(b, d + 1) - 1) / (b - 1) || d;
    },
    gen_num_of_nodes: (b, d) => {
        return b * d;
    },
    generate_new_a_matrix: (num_of_nodes) => {
        let a_matrix = [];
        for (let i = 0; i < num_of_nodes; i++) {
            a_matrix.push([]);
            for (let j = 0; j < num_of_nodes; j++) {
                a_matrix[i].push(0);
            }
        }
        return a_matrix;
    }
};
