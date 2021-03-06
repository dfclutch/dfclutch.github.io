/*
*   Model and Functions for a GraphNode object
*
*   Author: Dan Filler 2.26.2019
 */

function GraphNode(x, y, index, color, text) {
    this.coord = {x, y};
    this.color = color || COLORS.BLACK;
    this.text = text || '';
    this.index = index;

    this.draw = () => {
        state.context.beginPath();
        state.context.fillStyle = this.color;
        let min_x = this.coord.x - state.node_size;
        let min_y = this.coord.y - state.node_size;
        state.context.fillRect(min_x, min_y, state.node_size * 2, state.node_size * 2);
        if (this.text !== '') {
            state.context.beginPath();
            state.context.font = `${(state.node_size * 3)} px Arial`;
            state.context.textAlign = "center";
            state.context.fillText(text, this.coord.x - 3 * state.node_size, this.coord.y + state.node_size);
        }
    };

    this.equals = (node) => {
        return this.index === node.index;
    };

    this.distance_to = (node) => {
        return Math.sqrt(Math.pow(node.coord.x - this.coord.x, 2) + Math.pow(node.coord.y - this.coord.y, 2))
    };
}
