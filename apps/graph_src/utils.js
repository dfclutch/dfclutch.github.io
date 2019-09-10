/*
*   Utilities for animators
*
*   Author: Dan Filler 6.2019
 */
const animator_utils = {
    /* tree specific utils.js */
    tree: {
        find_goal_index: () => {
            let first_index_in_last_row = generate_utils.tree_num_of_nodes(state.branching_factor, (state.depth - 1));
            let num_of_nodes_in_last_row = Math.pow(state.branching_factor, (state.depth));
            return Math.floor(Math.random() * num_of_nodes_in_last_row) + first_index_in_last_row;
        },
        set_d_and_b: () => {
            page_elements.branching_factor.max = 9;
            if (state.branching_factor === 2) {
                page_elements.depth.max = 9;
                page_elements.depth.value = state.depth = 6;
            } else if (state.branching_factor < 4) {
                page_elements.depth.max = 6;
                page_elements.depth.value = state.depth = 3;
            } else if (state.branching_factor < 5) {
                page_elements.depth.max = 5;
                page_elements.depth.value = state.depth = 3;
            } else if (state.branching_factor < 8) {
                page_elements.depth.max = 4;
                page_elements.depth.value = state.depth = 2;
            } else {
                page_elements.depth.max = 3;
                page_elements.depth.value = state.depth = 2;
            }
        }
    },
    find_goal_index: () => {
        if (state.graph_type === GRAPH_TYPES.TREE) {
            return animator_utils.tree.find_goal_index();
        }

        return state.graph.nodes.length - 1;
    },
    find_search_path_set: (path_element) => {
        let nodes = [];
        let edges = [];
        while (path_element.parent !== null) {
            let start = path_element.node;
            nodes.push(path_element.node);
            path_element = path_element.parent;
            let end = path_element.node;
            edges.push(
                new GraphEdge(
                    start,
                    end
                )
            );
        }
        //add root
        nodes.push(state.graph.nodes[0]);
        return {nodes, edges};
    },
    color_graph_nodes: (frame_graph, node_sets) => {
        for (let node_set of node_sets) {
            let color = node_set.color;
            let nodes = node_set.nodes;
            nodes.forEach((node) => {
                frame_graph.nodes[node.index] = new GraphNode(
                    node.coord.x,
                    node.coord.y,
                    node.index,
                    color
                );
            });
        }
    },
    color_graph_edges: (frame_graph, edge_sets) => {
        edge_sets.forEach(edge_set => {
            let color = edge_set.color;
            let edges = edge_set.edges;
            edges.forEach((edge) => {
                frame_graph.edges.push(
                    new GraphEdge(
                        edge.nodes.start,
                        edge.nodes.end,
                        color
                    )
                );
            });
        })
    },
    visited: (node, arr) => {
        return arr.includes(node);
    },
    order_edges_by_euclid_dist: (edges) => {
        let ordered_set = [];
        edges.forEach(edge => {
            let current_dist = edge.euclid_dist;
            let index = 0;
            while (index < ordered_set.length && current_dist >= ordered_set[index].euclid_dist) {
                index++;
            }
            ordered_set.splice(index, 0, edge);
        });
        return ordered_set;
    },
    order_nodes_by_euclid_dist: (nodes, goal_node) => {
        let ordered_set = [];
        let dist_list = [];
        nodes.forEach(node => {
            let current_dist = node.distance_to(goal_node);
            let index = 0;
            while (index < ordered_set.length && current_dist >= dist_list[index]) {
                index++;
            }
            dist_list.splice(index, 0, current_dist);
            ordered_set.splice(index, 0, node);
        })
    },
    find_aug_path: (edges, source, sink, graph) => {
        //perform BFS from source to sink
        let open = [source];
        let path = new Array(graph.nodes.length);
        while (open.length !== 0) {
            let current = open.shift();
            let edges = get_connected_edges(current, graph);

            edges.forEach(edge => {
                if (path[edge.nodes.end.index] === undefined && !edge.nodes.end.equals(source) && edge.cap() > edge.flow) {
                    path[edge.nodes.end.index] = edge;
                    open.push(edge.nodes.end);
                }
            });
        }
        return path;
    },
    remove_lowest_score: (nodes, scores) => {
        let min = Infinity;
        let lowest_node_index = -1;
        nodes.forEach((node, index) => {
            if (scores[node.index] < min) {
                min = scores[node.index];
                lowest_node_index = index;
            }
        });
        return nodes.splice(lowest_node_index, 1)[0];
    }
};

const comparator = {
    edge_length: (e1, e2) => {
        return e1.euclid_dist - e2.euclid_dist;
    },
    heuristicValue: (h) => {
        return (a, b) => {
            return a.h - b.h;
        }
    },
    property: (prop_name) => {
        return (a, b) => {
            return a[prop_name] - b[prop_name];
        }
    }
};

const heuristic = {
    node_euclid_dist(node, goal) {
        node.distance_to(goal);
    }
};

const chance = {
    between: (min, max) => {
        return Math.floor(Math.random() * (max - min) + min) + 1;
    }
};
