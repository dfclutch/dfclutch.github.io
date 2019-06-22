/*
*   Main animators
 */

const animators = {
    tree: {
        bfs: () => {
            resetFrames();
            let open = [];
            let closed = [];
            let goal_index = animator_utils.tree.find_goal_index(state.graph);
            let current_index = 0;
            let current_frame = new Frame();
            current_frame.add_node_component({
                node: state.graph.node_coords[goal_index],
                color: COLORS.RED
            });
            open.push({
                index: current_index,
                parent: null,
                depth: 0
            });

            while (open.length > 0) {
                let current_node = open.pop();
                let current_frame = new Frame();

                if (current_node.depth > state.depth) {
                    continue;
                }

                if(current_node.index === goal_index) {

                    break;
                }

                let children = state.graph.get_connected_nodes(current_node.index);
                children.forEach((child_index) => {
                    open.push({
                        index: child_index,
                        parent: current_node,
                        depth: current_node.depth + 1
                    });
                });

                animator_utils.add_node_set(current_frame, closed, COLORS.GREEN);
                let path = animator_utils.find_path_set(current_node);
                animator_utils.add_node_set(current_frame, path, COLORS.GREEN);

                closed.push(current_node.index);

                state.frames.push(current_frame);
            }
            animate();
        },
        dfs: () => {
        }
    }
};