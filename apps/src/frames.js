/*
*   Constructor and utils for animation frames
*
*   Frame structure:
*   nodes - object containing a node_list property, array of nodes, and a color property, an array of the same length as
*   node_list where each entry is a color from . An optional text property holds an array of strings
*   where for any entry text[i] the node at nodes[i] will have that text attached.
*
*   edge_sets - similar to node sets but instead of a nodes property, an edges property, an array of [node, node] to be
*   drawn as an edge
*
*   Author: Dan Filler 6.2019
 */

function Frame() {
    this.node_components = {
        nodes: [],
        colors: [],
        text: []
    };
    this.edge_components = {
        edges: [],
        colors: [],
        text: []
    };
    /*
    *   Add a node to the current frame. component is an object with properties node (a coordinate), color, and text (optional)
     */
    this.add_node_component = (component) => {
        this.node_components.nodes.push(component.node);
        this.node_components.colors.push(component.color);
        component.text ? this.node_components.text.push(component.text) : this.node_components.text.push('');
    };

    this.add_edge_component = (component) => {
        this.node_components.edges.push(component.edge);
        this.node_components.colors.push(component.color);
        component.text ? this.node_components.text.push(component.text) : this.node_components.text.push('');
    };
}

function resetFrames() {
    state.frames.length = 0;
}