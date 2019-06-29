/*
*   Main animators
 */

const animators = {
    tree: {
        /*bfs: () => {
            draw_graph(state.graph);
            resetFrames();
            let open = [];
            let closed = [];
            let goal_index = animator_utils.find_goal_index();
            let frame_graph = new Graph();
            frame_graph.nodes.push(
                new GraphNode(
                    state.graph.nodes[goal_index].coord.x,
                    state.graph.nodes[goal_index].coord.y,
                    COLORS.RED
                )
            );
            open.push(0);
            state.frames.push(frame_graph);

            while (open.length > 0) {
                let current_node = open.shift();
                frame_graph = new Graph();

                if (current_node === goal_index) {
                    let path = animator_utils.find_search_path_set(goal_index);
                    animator_utils.color_graph(frame_graph, [
                        {
                            nodes: closed,
                            color: COLORS.GREEN
                        },
                        {
                            nodes: path.nodes,
                            color: COLORS.RED
                        }
                    ]);
                    animator_utils.add_edge_sets(frame_graph, [{
                        edges: path.edges,
                        color: COLORS.RED
                    }]);
                    state.frames.push(frame_graph);
                    break;
                }

                let children = get_children(current_node);
                children.forEach((child_index) => {
                    open.push(child_index)
                });

                closed.push(current_node);

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
            animate();
        },*/
        dfs: () => {
            draw_graph(state.graph);
            resetFrames();
            let open = [];
            let closed = [];
            let goal_index = animator_utils.tree.find_goal_index(state.graph);
            let frame_graph = new Graph();
            frame_graph.nodes.push(
                new GraphNode(
                    state.graph.nodes[goal_index].coord.x,
                    state.graph.nodes[goal_index].coord.y,
                    COLORS.RED
                )
            );
            open.push(0);
            state.frames.push(frame_graph);

            while (open.length > 0) {
                let current_node = open.shift();
                frame_graph = new Graph();

                if (current_node === goal_index) {
                    let path = animator_utils.find_search_path_set(goal_index);
                    animator_utils.color_graph(frame_graph, [
                        {
                            nodes: closed,
                            color: COLORS.GREEN
                        },
                        {
                            nodes: path.nodes,
                            color: COLORS.RED
                        }
                    ]);
                    animator_utils.add_edge_sets(frame_graph, [{
                        edges: path.edges,
                        color: COLORS.RED
                    }]);
                    state.frames.push(frame_graph);
                    break;
                }

                let children = get_children(current_node).reverse();
                children.forEach((child_index) => {
                    open.unshift(child_index)
                });

                closed.unshift(current_node);

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
            animate();
        }
    },
    bfs: () => {
        draw_graph(state.graph);
        resetFrames();
        let open = [];
        let closed = [];
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
                let path = animator_utils.find_search_path_set(current_node);
                animator_utils.color_graph(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.RED
                    }
                ]);
                animator_utils.add_edge_sets(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.RED
                }]);
                state.frames.push(frame_graph);
                break;
            }

            let children = get_children(current_node.index);
            children.forEach((child_index) => {
                open.push({
                    index: child_index,
                    parent: current_node
                })
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
        animate();
    },
    dfs: () => {
        draw_graph(state.graph);
        resetFrames();
        let open = [];
        let closed = [];
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
                let path = animator_utils.find_search_path_set(current_node);
                animator_utils.color_graph(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.RED
                    }
                ]);
                animator_utils.add_edge_sets(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.RED
                }]);
                state.frames.push(frame_graph);
                break;
            }

            let children = get_children(current_node.index).reverse();
            children.forEach((child_index) => {
                open.unshift({
                    index: child_index,
                    parent: current_node
                })
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
        animate();
    }
};