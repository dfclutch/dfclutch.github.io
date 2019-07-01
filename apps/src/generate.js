/*
*   Functions for generating various types of graphs. Implemented as layered objects. So to generate a tree the call
*   would look like generate.a_matrix.tree(branching_factor, depth)
*
*   Author: Dan Filler 6.2019
*/

const generate = {
    a_matrix: {
        tree: (b, d) => {
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
        undirected_simple: (b, d) => {
            const num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            for (let parent = 0; parent < num_of_nodes; parent++) {
                let num_connected = chance.between(1, state.density) / 2;
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
        directed_simple: (b, d) => {
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
        edge_weighted: (b, d) => {
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
        }
    },
    nodes: {
        tree: (b, d) => {
            const nodes = [];

            let y_pos = CANVAS.OFFSET;
            let row_height = CANVAS.USABLE_HEIGHT / d;
            let num_in_row = 1;

            for (let row = 0; row < d + 1; row++) {
                for (let pos_in_row = 0; pos_in_row < num_in_row; pos_in_row++) {
                    let x_pos = Math.floor(CANVAS.USABLE_WIDTH * (pos_in_row + 1) / (num_in_row + 1) + CANVAS.OFFSET);
                    let current_node = new GraphNode(x_pos, y_pos);
                    nodes.push(current_node);
                }
                num_in_row *= b;
                y_pos = Math.floor(y_pos + row_height);
            }
            return nodes;
        },
        undirected_simple: (b, d) => {
            const nodes = [];
            let num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            for (let i = 0; i < num_of_nodes; i++) {
                let x_pos = Math.floor((Math.random() * (state.canvas.width - 50) * 20 + 50) / 20);
                let y_pos = Math.floor((Math.random() * (state.canvas.height - 50) * 10 + 50) / 10);
                let current_node = new GraphNode(x_pos, y_pos);
                nodes.push(current_node);
            }
            return nodes;
        },
        directed_simple: () => {
            return null;
        },
        edge_weighted: () => {
            return null;
        }
    },
    edges: (graph) => {
        let matrix = graph.a_matrix;
        let nodes = graph.nodes;
        let edges = [];
        matrix.forEach((parent_vector, parent_index) => {
            parent_vector.forEach((is_connected, child_index) => {
                if (is_connected === 1) {
                    let new_edge = new GraphEdge(nodes[parent_index].coord, nodes[child_index].coord, COLORS.BLACK);
                    edges.push(new_edge);
                }
            });
        });
        return edges
    },
    weighted_edges: (graph) => {
        let edges = generate.edges(graph);
        edges.forEach((edge) => {
            edge.weight = chance.between(1, MAX_FLOW_CAP);
            edge.flow = 0;
            edge.direction = chance.between(0, 1);
            edge.cap = () => {
                return edge.weight - edge.flow;
            }
        });
        return edges;
    }
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
