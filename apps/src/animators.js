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
        let goal_node = state.graph.nodes[animator_utils.find_goal_index()];
        goal_node.color = COLORS.RED;
        let frame_graph = new Graph();
        frame_graph.nodes.push(goal_node);
        open.push({
            node: state.graph.nodes[0],
            parent: null
        });
        state.frames.push(frame_graph);

        while (open.length > 0) {
            let current = open.shift();
            frame_graph = new Graph();

            if (current.node.index === goal_node.index) {
                success = true;
                let path = animator_utils.find_search_path_set(current);
                animator_utils.color_graph_nodes(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.BLUE
                    }
                ]);
                animator_utils.color_graph_edges(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.BLUE
                }]);
                state.frames.push(frame_graph);
                output_text(
                    `Nodes Visited: ${closed.length}<br>Path To Goal: ${path.edges.length}`);
                break;
            }

            let children = get_children(current.node);
            children.forEach((child) => {
                if (!animator_utils.visited(child, closed)) {
                    open.push({
                        node: child,
                        parent: current
                    });
                }
            });

            closed.push(current.node);

            let path = animator_utils.find_search_path_set(current);

            animator_utils.color_graph_nodes(frame_graph, [
                {
                    nodes: closed,
                    color: COLORS.GREEN
                },
                {
                    nodes: path.nodes,
                    color: COLORS.YELLOW
                },
                {
                    nodes: [goal_node],
                    color: COLORS.RED
                }]);
            animator_utils.color_graph_edges(frame_graph, [{
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
        let success = false;
        let goal_node = state.graph.nodes[animator_utils.find_goal_index()];
        goal_node.color = COLORS.RED;
        let frame_graph = new Graph();
        frame_graph.nodes.push(goal_node);
        open.push({
            node: state.graph.nodes[0],
            parent: null
        });
        state.frames.push(frame_graph);

        while (open.length > 0) {
            let current = open.shift();
            frame_graph = new Graph();

            if (current.node.index === goal_node.index) {
                success = true;
                let path = animator_utils.find_search_path_set(current);
                animator_utils.color_graph_nodes(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.BLUE
                    }
                ]);
                animator_utils.color_graph_edges(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.BLUE
                }]);
                state.frames.push(frame_graph);
                output_text(
                    `Nodes Visited: ${closed.length}<br>Path To Goal: ${path.edges.length}`);
                break;
            }

            let children = get_children(current.node).reverse();
            children.forEach((child) => {
                if (!animator_utils.visited(child, closed)) {
                    open.unshift({
                        node: child,
                        parent: current
                    });
                }
            });

            closed.push(current.node);

            let path = animator_utils.find_search_path_set(current);

            animator_utils.color_graph_nodes(frame_graph, [
                {
                    nodes: closed,
                    color: COLORS.GREEN
                },
                {
                    nodes: path.nodes,
                    color: COLORS.YELLOW
                },
                {
                    nodes: [goal_node],
                    color: COLORS.RED
                }]);
            animator_utils.color_graph_edges(frame_graph, [{
                edges: path.edges,
                color: COLORS.YELLOW
            }]);
            if (!success) output_text('No Solution');
            state.frames.push(frame_graph);
        }
        animate();
    },
    greedy_bfs: () => {
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
                animator_utils.color_graph_nodes(frame_graph, [
                    {
                        nodes: closed,
                        color: COLORS.GREEN
                    },
                    {
                        nodes: path.nodes,
                        color: COLORS.BLUE
                    }
                ]);
                animator_utils.color_graph_edges(frame_graph, [{
                    edges: path.edges,
                    color: COLORS.BLUE
                }]);
                state.frames.push(frame_graph);
                output_text(
                    `Nodes Visited: ${closed.length}<br>Path To Goal: ${path.edges.length}`);
                break;
            }

            let children = get_children(current_node.index);
            children.forEach((child_index) => {
                let child_node = state.graph.nodes[child_index];
            });

            closed.push(current_node.index);

            let path = animator_utils.find_search_path_set(current_node);

            animator_utils.color_graph_nodes(frame_graph, [
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
            animator_utils.color_graph_edges(frame_graph, [{
                edges: path.edges,
                color: COLORS.YELLOW
            }]);
            if (!success) output_text('No Solution');
            state.frames.push(frame_graph);
        }
        animate();
    },
    ford_fulkerson: () => {

    },
    kruskal: () => {
        console.log(state.graph);
        draw_graph(state.graph);
        resetFrames();
        let frame_graph = new Graph();
        let sets = [];
        let edge_set = animator_utils.order_edges_by_euclid_dist(state.graph.edges);


        console.log(sets);

        /*while(edge_set.length !== 0) {

        }*/


        /*animate();*/
    }
};