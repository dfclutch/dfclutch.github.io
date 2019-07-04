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
        let state_goal_node = state.graph.nodes[animator_utils.find_goal_index()];
        let goal_node = new GraphNode(
            state_goal_node.coord.x,
            state_goal_node.coord.y,
            state_goal_node.index,
            COLORS.RED
        );
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
        let state_goal_node = state.graph.nodes[animator_utils.find_goal_index()];
        let goal_node = new GraphNode(
            state_goal_node.coord.x,
            state_goal_node.coord.y,
            state_goal_node.index,
            COLORS.RED
        );
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
        let state_goal_node = state.graph.nodes[animator_utils.find_goal_index()];
        let goal_node = new GraphNode(
            state_goal_node.coord.x,
            state_goal_node.coord.y,
            state_goal_node.index,
            COLORS.RED
        );
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
    ford_fulkerson: () => {

    },
    prim: () => {
        console.log(state.graph);
        draw_graph(state.graph);
        resetFrames();
        let frame_graph = new Graph();
        let mst =
            {
                nodes: [state.graph.nodes[0]],
                edges: []
            };
        animator_utils.color_graph_nodes(
            frame_graph,
            [
                {
                    nodes: mst.nodes,
                    color: COLORS.RED
                }
            ]
        );
        state.frames.push(frame_graph);
        let esc = 0;
        let cumulative_weight = 0;
        let graph_total_weight = Math.floor(total_edge_weight());
        while(mst.nodes.length !== state.graph.nodes.length && esc < state.graph.edges.length) {
            esc++;
            frame_graph = new Graph();
            let edges = get_all_connected_edges(mst.nodes);
            let sorted_edges = animator_utils.order_edges_by_euclid_dist(edges);
            for(let i = 0; i < sorted_edges.length; i++) {
                let lowest_cost_edge = sorted_edges[i];
                let new_node = !(includes_node(lowest_cost_edge.nodes.end, mst.nodes)) ? lowest_cost_edge.nodes.end : lowest_cost_edge.nodes.start;
                if(!includes_node(new_node, mst.nodes)) {
                    mst.nodes.push(new_node);
                    mst.edges.push(lowest_cost_edge);
                    cumulative_weight += lowest_cost_edge.euclid_dist;
                    break;
                }
            }
            animator_utils.color_graph_nodes(frame_graph,
                [
                    {
                        nodes: mst.nodes,
                        color: COLORS.RED
                    }]);
            animator_utils.color_graph_edges(frame_graph,
                [{
                    edges: mst.edges,
                    color: COLORS.RED
                }]);
            state.frames.push(frame_graph);
        }
        frame_graph = new Graph();
        animator_utils.color_graph_nodes(frame_graph,
            [
                {
                    nodes: mst.nodes,
                    color: COLORS.BLUE
                }]);
        animator_utils.color_graph_edges(frame_graph,
            [{
                edges: mst.edges,
                color: COLORS.BLUE
            }]);
        output_text(
            `Cumulative Weight: ${Math.floor(cumulative_weight)}<br>Total Graph Weight: ${graph_total_weight}`);
        state.frames.push(frame_graph);
        animate();
    }
};