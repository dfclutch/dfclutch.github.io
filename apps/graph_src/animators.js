/*
*   Main animators
 */

const animators = {
    bfs: async () => {
        draw_graph(state.graph);
        resetFrames();
        let open = [];
        let closed = [];
        let success = false;
        let {start_node, goal_node} = animator_utils.get_start_goal_nodes();
        let frame_graph = new Graph();
        frame_graph.nodes.push(goal_node);
        open.push({
            node: start_node,
            parent: null
        });
        state.frames.push(frame_graph);

        while (open.length) {
            let current = open.shift();
            frame_graph = new Graph();

            if (current.node.equals(goal_node)) {
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

            let children = get_children(current.node, state.graph, state.graph);
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
            state.frames.push(frame_graph);
        }
        if (!success) output_text('No Solution');
        animate();
    },
    dfs: () => {
        draw_graph(state.graph);
        resetFrames();
        let open = [];
        let closed = [];
        let success = false;

        let {start_node, goal_node} = animator_utils.get_start_goal_nodes();
        let frame_graph = new Graph();
        frame_graph.nodes.push(goal_node);
        open.push({
            node: start_node,
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

            let children = get_children(current.node, state.graph).reverse();
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
    /* ford_fulkerson: () => {
        draw_graph(state.graph);
        resetFrames();
        let frame_graph = new Graph();
        let source = state.graph.nodes[0];
        let sink = state.graph.nodes[state.graph.nodes.length - 1];
        let flow = 0;
        let path = [];
        let path_exists = true;
        let edges = animator_utils.generate_reverse_edges(state.graph.edges);

        while (path_exists) {
            path = animator_utils.find_aug_path(edges, source, sink, state.graph);

            if (path[sink.index] === null) {
                path_exists = false;
                break;
            }
            //find min flow
            let increment = Infinity;
            for (let edge = path[sink.nodes.end.index]; edge != null; edge = path[edge.nodes.start.index]) {
                if ((edge.cap() - edge.flow) < increment) increment = edge.cap() - edge.flow;
            }
            //update edges by increment
            for (let edge = path[sink.index]; edge != null; edge = path[edge.start]) {
                edge.flow += increment;
                edge.reverse.flow -= increment;
            }
            flow += increment;
        }
    }, */
    prim_euclid: async () => {
        let local_graph = state.graph;
        state.graph = {nodes: local_graph.nodes, a_matrix: local_graph.a_matrix, edges: []};
        draw_nodes(local_graph.nodes);
        resetFrames();
        let frame_graph = new Graph();
        let starting_index = chance.between(0, local_graph.nodes.length - 1);
        let mst =
            {
                nodes: [local_graph.nodes[starting_index]],
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
        while (mst.nodes.length !== local_graph.nodes.length && esc < local_graph.edges.length) {
            esc++;
            frame_graph = new Graph();
            let edges = get_all_connected_edges(mst.nodes, local_graph);

            let sorted_edges = animator_utils.order_edges_by_euclid_dist(edges);
            for (let i = 0; i < sorted_edges.length; i++) {
                let lowest_cost_edge = sorted_edges[i];
                let new_node = !(includes_component(lowest_cost_edge.nodes.end, mst.nodes)) ? lowest_cost_edge.nodes.end : lowest_cost_edge.nodes.start;
                if (!includes_component(new_node, mst.nodes)) {
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
            `Cumulative Weight: ${Math.floor(cumulative_weight)}`);
        state.frames.push(frame_graph);
        await animate();
        state.graph = local_graph
    },
    a_star: () => {
        draw_graph(state.graph);
        resetFrames();
        let {start_node, goal_node} = animator_utils.get_start_goal_nodes();
        let frame_graph = new Graph();
        let success = false;
        frame_graph.nodes.push(goal_node);

        const open = [];
        open[0] = start_node;
        const closed = [];
        const search_path = [];
        const cumulative_score = [];
        const path_cost = [];
        search_path[start_node.index] = {
            node: start_node,
            parent: null
        };

        for (let i = 0; i < state.graph.nodes.length; i++) {
            cumulative_score[i] = path_cost[i] = Infinity;
        }

        path_cost[start_node.index] = 0;
        cumulative_score[start_node.index] = start_node.distance_to(goal_node);

        state.frames.push(frame_graph);
        while (!success && open.length) {
            frame_graph = new Graph();
            const current = animator_utils.remove_lowest_score(open, cumulative_score);
            closed.push(current);

            if (current.equals(goal_node)) {
                success = true;
                let path = animator_utils.find_search_path_set(search_path[current.index]);
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
                    `Nodes Visited: ${closed.length}<br>Path To Goal: ${Math.floor(total_edge_weight(path.edges))}`
                );
                break;
            }
            let connected = get_children(current, state.graph);

            connected.forEach(neighbor => {
                let new_score = path_cost[current.index] + euclid_dist(current, neighbor);

                if (!includes_component(neighbor, closed)) {
                    open.push(neighbor)
                }

                if (new_score < path_cost[neighbor.index]) {
                    search_path[neighbor.index] = {
                        node: neighbor,
                        parent: search_path[current.index]
                    };
                    path_cost[neighbor.index] = new_score;
                    cumulative_score[neighbor.index] = new_score + euclid_dist(neighbor, goal_node);
                }
            });
            let path = animator_utils.find_search_path_set(search_path[current.index]);

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
            state.frames.push(frame_graph);
        }
        if (!success) output_text('No Solution');
        animate();
    },
    greedy_search: () => {
        draw_graph(state.graph);
        resetFrames();
        let {start_node, goal_node} = animator_utils.get_start_goal_nodes();
        let frame_graph = new Graph();
        let success = false;
        frame_graph.nodes.push(goal_node);

        const open = [];
        open[0] = start_node;
        const closed = [];
        const search_path = [];
        const f_scores = [];
        const g_scores = [];
        search_path[start_node.index] = {
            node: start_node,
            parent: null
        };

        for (let i = 0; i < state.graph.nodes.length; i++) {
            f_scores[i] = g_scores[i] = Infinity;
        }

        g_scores[start_node.index] = 0;
        f_scores[start_node.index] = start_node.distance_to(goal_node);

        state.frames.push(frame_graph);
        while (!success && open.length) {
            frame_graph = new Graph();
            const current = animator_utils.remove_lowest_score(open, f_scores);
            closed.push(current);

            if (current.equals(goal_node)) {
                success = true;
                let path = animator_utils.find_search_path_set(search_path[current.index]);
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
                    `Nodes Visited: ${closed.length}<br>Path To Goal: ${Math.floor(total_edge_weight(path.edges))}`
                );
                break;
            }
            let connected = get_children(current, state.graph);

            connected.forEach(neighbor => {
                let new_g_score = g_scores[current.index] +euclid_dist(current, neighbor);

                if (!includes_component(neighbor, closed)) {
                    open.push(neighbor)
                }

                if (new_g_score < g_scores[neighbor.index]) {
                    search_path[neighbor.index] = {
                        node: neighbor,
                        parent: search_path[current.index]
                    };
                    g_scores[neighbor.index] = new_g_score;
                    f_scores[neighbor.index] = euclid_dist(neighbor, goal_node);
                }
            });
            let path = animator_utils.find_search_path_set(search_path[current.index]);

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
            state.frames.push(frame_graph);
        }
        if (!success) output_text('No Solution');
        animate();
    },
    live_network: () => {
        state.currently_animating = true;
        draw_graph(state.graph);
        resetFrames();

        state.animation_timer = setInterval(function() {
            let frame_graph = new Graph();
            frame_graph.edges = state.graph.edges.splice();
            frame_graph.nodes = state.graph.nodes.splice();

            frame_graph.edges.forEach(edge => {
                edge.pos_count = 0;
                edge.neg_count = 0;
            });

            //randomly increase or decrease weight of edges
            frame_graph.edges.forEach(edge => {
                let old_weight = edge.weight;
                let total = edge.pos_count + edge.neg_count;
                let pos_bias = edge.pos_count / total;
                let neg_bias = edge.neg_count / total;
                //weighted coin flip * 10
                edge.weight += Math.sign(chance.between(-10 * neg_bias, 10 * pos_bias)) * chance.between(10)
                (old_weight < edge.weight) ? pos_count++ : neg_count++;
            });
            clear_canvas();
            draw_graph(frame_graph);
        }, state.speed);

    }
};