/*
*   Main animators
 */

const animators = {
    bfs: () => {
        draw_graph(state.graph);
        resetFrames();
        let open = [];
        let closed = [];
        let success = false;
        let goal_index = animator_utils.find_goal_index();
        let frame_graph = new Graph();
        frame_graph.nodes.push(
            new GraphNode(
                state.graph.nodes[goal_index].coord.x,
                state.graph.nodes[goal_index].coord.y,
                COLORS.RED
            )
        );
        open.push({
            index: 0,
            parent: null
        });
        state.frames.push(frame_graph);

        while (open.length > 0) {
            let current_node = open.shift();
            frame_graph = new Graph();

            if (current_node.index === goal_index) {
                success = true;
                let path = animator_utils.find_search_path_set(current_node);
                animator_utils.color_graph(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.BLUE
                    }
                ]);
                animator_utils.add_edge_sets(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.BLUE
                }]);
                state.frames.push(frame_graph);
                output_text(
                    `Number of Nodes Visited: ${closed.length}\nPath To Goal: ${path.edges.length}`);
                break;
            }

            let children = get_children(current_node.index);
            children.forEach((child_index) => {
                if (!animator_utils.visited(child_index, closed)) {
                    open.push({
                        index: child_index,
                        parent: current_node
                    });
                }
            });

            closed.push(current_node.index);

            let path = animator_utils.find_search_path_set(current_node);

            animator_utils.color_graph(frame_graph, [
                {
                    nodes: closed,
                    color: COLORS.GREEN
                },
                {
                    nodes: path.nodes,
                    color: COLORS.YELLOW
                },
                {
                    nodes: [goal_index],
                    color: COLORS.RED
                }]);
            animator_utils.add_edge_sets(frame_graph, [{
                edges: path.edges,
                color: COLORS.YELLOW
            }]);
            if (!success) output_text('No Solution');
            state.frames.push(frame_graph);
        }
        animate();
    },
    dfs: () => {
        draw_graph(state.graph);
        resetFrames();
        let open = [];
        let closed = [];
        let success;
        let goal_index = animator_utils.find_goal_index();
        let frame_graph = new Graph();
        frame_graph.nodes.push(
            new GraphNode(
                state.graph.nodes[goal_index].coord.x,
                state.graph.nodes[goal_index].coord.y,
                COLORS.RED
            )
        );
        open.push({
            index: 0,
            parent: null
        });
        state.frames.push(frame_graph);

        while (open.length > 0) {
            let current_node = open.shift();
            frame_graph = new Graph();

            if (current_node.index === goal_index) {
                success = true;
                let path = animator_utils.find_search_path_set(current_node);
                animator_utils.color_graph(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.BLUE
                    }
                ]);
                animator_utils.add_edge_sets(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.BLUE
                }]);
                state.frames.push(frame_graph);
                output_text(
                    `Number of Nodes Visited: ${closed.length}\nPath To Goal: ${path.edges.length}`);
                break;
            }

            let children = get_children(current_node.index).reverse();
            children.forEach((child_index) => {
                if (!animator_utils.visited(child_index, closed)) {
                    open.unshift({
                        index: child_index,
                        parent: current_node
                    });
                }
            });

            closed.push(current_node.index);

            let path = animator_utils.find_search_path_set(current_node);

            animator_utils.color_graph(frame_graph, [
                {
                    nodes: closed,
                    color: COLORS.GREEN
                },
                {
                    nodes: path.nodes,
                    color: COLORS.YELLOW
                },
                {
                    nodes: [goal_index],
                    color: COLORS.RED
                }]);
            animator_utils.add_edge_sets(frame_graph, [{
                edges: path.edges,
                color: COLORS.YELLOW
            }]);

            state.frames.push(frame_graph);
        }
        if (!success) output_text('No Solution');
        animate();
    },
    ford_fulkerson: () => {

    }
};