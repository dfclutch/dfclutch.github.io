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
}