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
        undirected_simple: () => {
            return null;
        },
        directed_simple: () => {
            return null;
        },
        edge_weighted: () => {
            return null;
        }
    },
    node_coords: {
        tree: (b, d) => {
            const node_coords = [];

            let y_pos = CANVAS.OFFSET;
            let row_height = CANVAS.USABLE_HEIGHT / d;
            let num_in_row = 1;

            for (let row = 0; row < d + 1; row++) {
                for (let pos_in_row = 0; pos_in_row < num_in_row; pos_in_row++) {
                    let x_pos = Math.floor(CANVAS.USABLE_WIDTH * (pos_in_row + 1) / (num_in_row + 1) + CANVAS.OFFSET);
                    node_coords.push([x_pos, y_pos]);
                }
                num_in_row *= b;
                y_pos = Math.floor(y_pos + row_height);
            }
            return node_coords;
        },
        undirected_simple: () => {
            return null;
        },
        directed_simple: () => {
            return null;
        },
        edge_weighted: () => {
            return null;
        }
    }
};

const generate_utils = {
    tree_num_of_nodes: (b, d) => {
        return (Math.pow(b, d + 1) - 1) / (b - 1) || d;
    },
    gen_num_of_nodes: (b, d) => {
        return b * d;
    }
};