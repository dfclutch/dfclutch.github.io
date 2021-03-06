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
        [GRAPH_TYPES.UND_SIMPLE]: (b, d, nodes) => {
            return (generate.a_matrix.nice_und(b,d,nodes))
        },
        [GRAPH_TYPES.COMPLETE]: (b, d) => {
            const num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            for (let parent = 0; parent < num_of_nodes; parent++) {
                for (let child = 0; child < num_of_nodes; child++) {
                    a_matrix[parent][child] = 1;
                }
            }
            return a_matrix;
        },
        [GRAPH_TYPES.DIR_SIMPLE]: (b, d, nodes) => {
            return (generate.a_matrix.nice(b,d,nodes))
        },
        [GRAPH_TYPES.NETWORK_FLOW]: (b, d, nodes) => {
            return (generate.a_matrix.nice(b,d, nodes));
        },
        nice: (b, d, nodes) => {
            let num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            // make matrix size of adj. matrix to hold distances for each pair of node
            let dist_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            //calculate all euclidean distances
            for (let i = 0; i < dist_matrix.length; i++) {
                for (let j = 0; j < dist_matrix.length; j++) {
                    let dist = Infinity;
                    if (i !== j) {
                        dist = euclid_dist(nodes[i], nodes[j]); // don't want self-relations
                    }
                    dist_matrix[i][j] = dist;
                }
            }
            let k = state.density;
            //get indices of k smallest elements of each node's children
            for(let parent = 0; parent < dist_matrix.length; parent++) {
                let closest_children = generate_utils.k_smallest_children(Math.floor(k * 1.5), dist_matrix[parent]);
                closest_children = chance.get_n_random_elements(closest_children, k);
                closest_children.forEach(child => {
                    a_matrix[parent][child] = 1;
                });
            }
            return a_matrix;
        },
        nice_und: (b, d, nodes) => {
            let num_of_nodes = generate_utils.gen_num_of_nodes(b, d);
            // make matrix size of adj. matrix to hold distances for each pair of node
            let dist_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            let a_matrix = generate_utils.generate_new_a_matrix(num_of_nodes);
            //calculate all euclidean distances
            for (let i = 0; i < dist_matrix.length; i++) {
                for (let j = 0; j < dist_matrix.length; j++) {
                    let dist = Infinity;
                    if (i !== j) {
                        dist = euclid_dist(nodes[i], nodes[j]); // don't want self-relations
                    }
                    dist_matrix[i][j] = dist;
                }
            }
            let k = state.density;
            //get indices of k smallest elements of each node's children
            for(let parent = 0; parent < dist_matrix.length; parent++) {
                let closest_children = generate_utils.k_smallest_children(Math.floor(k * 1.5), dist_matrix[parent]);
                closest_children = chance.get_n_random_elements(closest_children, k);
                closest_children.forEach(child => {
                    a_matrix[parent][child] = 1;
                    a_matrix[child][parent] = 1;
                });
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
            
            function offset() {
                return state.graph_type === GRAPH_TYPES.COMPLETE ? 64 - num_of_nodes + 50 :
                    Math.floor((MAX_NUM_NODES - num_of_nodes) / 2) + 10;
            }
                        
            for (let i = 0; i < num_of_nodes; i++) {
                let x_pos = chance.between(offset(), state.canvas.width - offset());
                let y_pos = chance.between(offset(), state.canvas.height - offset());
                let current_node = new GraphNode(x_pos, y_pos, i);
                nodes.push(current_node);
            }
            return nodes;
        },
        [GRAPH_TYPES.DIR_SIMPLE]: (b, d) => {
            return (generate.nodes[GRAPH_TYPES.UND_SIMPLE](b,d));
        },
        [GRAPH_TYPES.NETWORK_FLOW]: (b, d) => {
            return (generate.nodes[GRAPH_TYPES.UND_SIMPLE](b, d));
        },
        [GRAPH_TYPES.COMPLETE]: (b, d) => {
            return (generate.nodes[GRAPH_TYPES.UND_SIMPLE](b, d));
        },
        [GRAPH_TYPES.NICE]: (b, d) => {
            return (generate.nodes[GRAPH_TYPES.UND_SIMPLE](b, d));
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
                        let new_edge = new GraphEdge(nodes[parent_index], nodes[child_index], COLORS.BLACK);
                        edges.push(new_edge);
                    }
                });
            });
            return edges
        },
        [GRAPH_TYPES.TREE]: (graph) => {
            return generate.edges.standard(graph)
        },
        [GRAPH_TYPES.UND_SIMPLE]: (graph) => {
            return generate.edges.standard(graph)
        },
        [GRAPH_TYPES.DIR_SIMPLE]: (graph) => {
            let matrix = graph.a_matrix;
            let nodes = graph.nodes;
            let edges = [];
            matrix.forEach((parent_vector, parent_index) => {
                parent_vector.forEach((is_connected, child_index) => {
                    if (is_connected === 1) {
                        let new_edge = new GraphEdge(nodes[parent_index], nodes[child_index]);
                        edges.push(new_edge);
                    }
                });
            });
            return edges
        },
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
        },
        [GRAPH_TYPES.COMPLETE]: (graph) => {
            return generate.edges.standard(graph)
        },
        [GRAPH_TYPES.NICE]: (graph) => {
            return generate.edges.standard(graph)
        },
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
    },
    //return indices of k smallest children as an array of length k
    k_smallest_children(k, dist_array) {
        //sort for when guaranteed only last element is in wrong place
        //O(n) - pretty good to me
        function advantage_sort(array) {
            let sorted_array = array.slice(0);
            let pos = sorted_array.length - 1;
            while( pos > 0 && sorted_array[pos].value <= sorted_array[pos - 1].value) {
                let t = sorted_array[pos];
                sorted_array[pos] = sorted_array[pos - 1];
                sorted_array[pos - 1] = t;
                pos--;
            }
            return sorted_array;
        }

        //simple ordering function for objects used here
        function sort_val(o1, o2) { return o1.value - o2.value; }

        let smallest_array = [];
        for(let i = 0; i < dist_array.length; i++) {
            if (smallest_array.length < k) {
                smallest_array.push({
                    index: i,
                    value: dist_array[i]
                });
                smallest_array = smallest_array.sort(sort_val);
            } else {
                smallest_array = advantage_sort(smallest_array);
                //if current is smaller than largest value in arr, remove and add current
                if (dist_array[i] < smallest_array[smallest_array.length - 1].value) {
                    smallest_array[smallest_array.length - 1] = {
                        index: i,
                        value: dist_array[i]
                    }
                }
            }
        }
        return smallest_array.map(elt => elt.index);
    }
};
