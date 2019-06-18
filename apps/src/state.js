/*
*	State tracking for graph, page, and animation information
*
*	Author: Dan Filler 6.2019
*/

function initState() {
	/* graph information */
	const graph_type = GRAPH_TYPES.TREE;
	const branching_factor = 2;
	const depth = 6;
	const density = 2;
	const graph = {};

	/* animation information */
	const frames = [];
	const animation_timer = null;
	const speed = 100;
	const node_size = 4;

	/* canvas information */
	const canvas = document.getElementById("viewport");
	const context = canvas.getContext('2d');

	let state = {
		graph_type,
		branching_factor,
		depth,
		density,
		graph,

		frames,
		animation_timer,
		speed,
		node_size,

		canvas,
		context
	}

	state.graph = new Graph(state);

	return state;
}

function update(prop_to_update) {
	end_animation();
	state[prop_to_update] = update_elements[prop_to_update].valueAsNumber;

	if(STOPPING_PROPERTIES.includes(prop_to_update)) {
		clear_canvas();
		state.graph = new Graph(state);
		draw_graph(state.graph);
	} else {
		animate();
	}
}

