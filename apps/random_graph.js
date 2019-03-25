/*
* Set of functions for animating Random graphs
*
* Author: Dan Filler 3.2019
*/

/***************      Graph GENERATION     ***************/

function generate_new_graph() {
	node_center_list.length = 0;
	edges.length = 0;
	let num_of_nodes = branching_factor * depth;

	for(var i=0; i<num_of_nodes; i++) {
		let new_x_coord = Math.floor((Math.random() * (canvas.width - 50) * 20 + 50) / 20);
		let new_y_coord = Math.floor((Math.random() * (canvas.height - 50) * 10 + 50) / 10);
		let new_coord = [new_x_coord, new_y_coord];
		node_center_list.push(new_coord);

		//generate rand number of children between 0 and density
		let num_connected = Math.floor(Math.random() * density) + 1;
		for (var j=0; j<num_connected; j++){
			let connected_node_coord = node_center_list[Math.floor(Math.random() * node_center_list.length)];
			//add num_connected number of connected nodes to edges list
			edges.push([new_coord, connected_node_coord]);
		}
	}

}

function draw_graph(nodes) {
	context.clearRect(0,0,canvas.width, canvas.height);
	context.beginPath();
	paint_set(RED, nodes);
	draw_edge_set(BLACK, edges);
}