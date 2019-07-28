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
    if (state) {
        this.a_matrix = generate.a_matrix[state.graph_type](state.branching_factor, state.depth);
        this.nodes = generate.nodes[state.graph_type](state.branching_factor, state.depth);
        this.edges = generate.edges[state.graph_type](this);

    } else {
        this.a_matrix = [];
        this.nodes = [];
        this.edges = [];
    }
}

function includes_node(node, arr) {
    for(let i = 0; i < arr.length; i++) {
        let current_node = arr[i];
        if(node.equals(current_node)) {
            return true;
        }
    }
    return false;
}

function get_children(node) {
    let connected = [];
    state.graph.a_matrix[node.index].forEach((elt, ind) => {
        if (elt === 1) connected.push(state.graph.nodes[ind]);
    });
    return connected;
}

function get_all_children(nodes) {
    let connected = [];
    nodes.forEach(node => {
        let children = get_children(node);
        connected.concat(children);
    });
}

function includes_edge(edge, arr) {
    for(let i = 0; i < arr.length; i++) {
        let current_edge = arr[i];
        if(edge.equals(current_edge)) {
            return true;
        }
    }
    return false;
}

function find_edge(node1, node2) {
    for(let i = 0; i < state.graph.edges.length; i++) {
        let edge = state.graph.edges[i];
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

function get_connected_edges(node) {
    let connected = [];
    let children = get_children(node);
    children.forEach((child) => {
        let edge = find_edge(node, child);
        connected.push(edge);
    });
    return connected;
}

function get_all_connected_edges(nodes) {
    let connected = [];
    nodes.forEach((node) => {
        let edges = get_connected_edges(node);
        edges.forEach((edge) => {
            if(!includes_edge(edge, connected)) {
                connected.push(edge);
            }
        });
    });
    return connected;
}

function total_edge_weight() {
    let total = 0;
    state.graph.edges.forEach(edge => {
        total += edge.euclid_dist;
    });
    return total;
}


