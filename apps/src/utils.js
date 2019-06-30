/*
*   Utilities for animators
*
*   Author: Dan Filler 6.2019
 */
const animator_utils = {
    /* tree specific utilities */
    tree: {
        find_goal_index: () => {
            let first_index_in_last_row = generate_utils.tree_num_of_nodes(state.branching_factor, (state.depth - 1));
            let num_of_nodes_in_last_row = Math.pow(state.branching_factor, (state.depth));
            return Math.floor(Math.random() * num_of_nodes_in_last_row) + first_index_in_last_row;
        }
    },
    find_goal_index: () => {
        if(state.graph_type === GRAPH_TYPES.TREE) {
            return animator_utils.tree.find_goal_index();
        }

        return chance.between(1, state.graph.nodes.length);
    },
    /*  for a given node augmented with index and parent properties, find the path back to the ultimate parent node, capped
    *   with a null parent prop
    */
    find_search_path_set: (node) => {
        let nodes = [];
        let edges = [];
        while (node.parent !== null) {
            let start = state.graph.nodes[node.index].coord;
            nodes.push(node.index);
            node = node.parent;
            let end = state.graph.nodes[node.index].coord;
            edges.push(
                {
                    start,
                    end
                }
            );
        }
        //add root
        nodes.push(0);
        return {nodes, edges};
    },
    color_graph: (frame_graph, node_sets) => {
        for (let node_set of node_sets) {
            let color = node_set.color;
            let nodes = node_set.nodes;
            nodes.forEach((index) => {
                let state_node = state.graph.nodes[index];
                frame_graph.nodes[index] = new GraphNode(
                    state_node.coord.x,
                    state_node.coord.y,
                    color
                )
            });

        }
    },
    add_edge_sets: (frame_graph, edge_sets) => {
        edge_sets.forEach( edge_set => {
            let color = edge_set.color;
            let edges = edge_set.edges;
            edges.forEach((edge) => {
                let new_edge = new GraphEdge(
                    edge.start,
                    edge.end,
                    color
                );
                frame_graph.edges.push(new_edge);
            });
        })
    },
    visited: (node, arr) => {
        return arr.includes(node);
    }
};

const chance = {
    between:  (min, max) => {
        return Math.floor(Math.random() * (max-min) + min) + 1;
    }
};
