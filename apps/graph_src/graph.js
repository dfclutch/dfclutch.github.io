/*
*	Model and functions for updating main Graph
*
*	Graph Structure:
*	Suppose graph G and set of nodes N of cardinality n
*
* 	Adjacency Matrix - Square (n x n) matrix representing relations in G
*	where for each n1, n2 in N where n1 != n2 if n1 -> n2 is a valid 
*	edge in G then a_matrix[n1][n2] = 1, else a_matrix[n1][n2] = 0.
*	Note: Self relations don't apply in most places so for any ni in N,
*	a_matrix[ni][ni] = null
*
*	Note: A possible expansion could include instances where the value in a_matrix[n1][n2]
*	is a positive integer greater than one representing multiple edges between n1, n2
*
*	Nodes- Array of length n where each entry is an object with two
*	properties, where for i in N, node_coords[i].x = x coord in the canvas and 
*	node_coords[i].y = y coord in the canvas
*
*	Author: Dan Filler
*/

/*
	Constructor for a Graph Object
	args:
		state - a state object minimally containing graph type, branching factor, depth, and density
	returns: 
		A valid graph based on the current settings in State
*/

/*
*   Constructor for a Graph Object
*   If given state: returns a graph meeting the current state settings
*   Otherwise: returns a general graph object to be populated manually (generally for drawing frames)
 */
function Graph(state) {
    MAX_NUM_NODES = page_elements.branching_factor.max * page_elements.depth.max;
    if (state) {
        this.nodes = generate.nodes[state.graph_type](state.branching_factor, state.depth);
        this.a_matrix = generate.a_matrix[state.graph_type](state.branching_factor, state.depth, this.nodes);
        this.edges = generate.edges[state.graph_type](this);
    } else {
        this.a_matrix = [];
        this.nodes = [];
        this.edges = [];
    }
}

function get_children(node, graph) {
    let connected = [];
    graph.a_matrix[node.index].forEach((elt, ind) => {
        if (elt === 1) connected.push(graph.nodes[ind]);
    });
    return connected;
}

function get_all_children(nodes, graph) {
    let connected = [];
    nodes.forEach(node => {
        let children = get_children(node, graph);
        connected.concat(children);
    });
}

function includes_component(component, arr) {
    for(let i = 0; i < arr.length; i++) {
        let current_component = arr[i];
        if(component.equals(current_component)) {
            return true;
        }
    }
    return false;
}

function find_edge_better(node1, node2, graph) {
    let edge_index = node1.index * node2.index;
    return graph.edges[edge_index];
}

function find_edge(node1, node2, graph) {
    for(let i = 0; i < graph.edges.length; i++) {
        let edge = graph.edges[i];
        if (edge.nodes.start.index === node1.index ) {
            if(edge.nodes.end.index === node2.index) {
                return edge;
            }
        } else if (edge.nodes.start.index === node2.index) {
            if (edge.nodes.end.index === node1.index) {
                return edge;
            }
        }
    }
}

function get_connected_edges(node, graph) {
    let connected = [];
    let children = get_children(node, graph);
    children.forEach((child) => {
        let edge = find_edge(node, child, graph);
        connected.push(edge);
    });
    return connected;
}

function get_all_connected_edges(nodes, graph) {
    let connected = [];
    nodes.forEach((node) => {
        let edges = get_connected_edges(node, graph);
        edges.forEach((edge) => {
            if(!includes_component(edge, connected)) {
                connected.push(edge);
            }
        });
    });
    return connected;
}

function total_edge_weight(edges) {
    let total = 0;
    edges.forEach(edge => {
        total += edge.euclid_dist;
    });
    return total;
}


