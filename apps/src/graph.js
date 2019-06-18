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
*	Node Coords - Array of length n where each entry is an object with two
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

function Graph(state) {
	const graph = {};
	switch (state.graph_type) {
		case GRAPH_TYPES.TREE:
			graph.a_matrix = generate.a_matrix.tree(state.branching_factor, state.depth);
			graph.node_coords = generate.node_coords.tree(state.branching_factor, state.depth);
			break;
		case GRAPH_TYPES.UND_SIMPLE:
			break;
		case GRAPH_TYPES.DIR_SIMPLE:
			break;
		case GRAPH_TYPES.EDGE_WEIGHTED:
			break;
		default:
		break;
	}

	return graph;
}