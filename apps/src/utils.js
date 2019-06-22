/*
*   Utilities for animators
*
*   Author: Dan Filler 6.2019
 */

const animator_utils = {
    /* tree specific utilities */
    tree: {
        find_goal_index: () => {
            let first_index_in_last_row = generate_utils.tree_num_of_nodes(state.branching_factor, (state.depth - 1)) + 1;
            let num_of_nodes_in_last_row = Math.pow(state.branching_factor, (state.depth - 1));
            return Math.floor(Math.random() * num_of_nodes_in_last_row) + first_index_in_last_row;
        }
    },
    /*  for a given node augmented with index and parent properties, find the path back to the ultimate parent node, capped
    *   with a null parent prop
    */
    find_path_set: (node) => {
        let node_set = [];
        let edge_set = [];
        while (node.parent != null) {
            node_set.push(node.index);
            edge_set.push([node.index, node.parent]);
            node = node.parent;
        }
        //add root
        node_set.push({index: 0, parent: null});
        return {
            nodes: node_set.slice(0),
            edges: edge_set.slice(0)
        };
    },
    /*
    *   Add a list of nodes (represented as indices to the frame, all with identical color and text attributes
    */
    add_node_set: (frame, node_set, color, text) => {
        for (let i = 0; i < node_set.length; i++) {
            frame.add_node_component({
                node: state.graph.node_coords[node_set[i].index],
                color: COLORS[color],
                text
            })
        }
    },
    add_edge_set: (frame, edge_set, color, text) => {
        for (let i = 0; i < edge_set.length; i++) {
            let current_edge = [state.graph.node_coords[edge_set[i][0]], state.graph.node_coords[edge_set[i][1]]];
            frame.add_edge_component({
                edge: current_edge,
                color: COLORS[color],
                text
            })
        }
    }
};