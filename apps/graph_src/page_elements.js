/*
*   Handles updates to UI update elements and mapping their results to state
*
*   Author: Dan Filler 6.2019
 */

const page_elements = {
    branching_factor: document.getElementById("branching"),
    depth: document.getElementById("depth"),
    density: document.getElementById("density"),
    node_size: document.getElementById("node_size"),
    speed: document.getElementById("speed"),
    graph_type: document.getElementsByName("graph_type"),
    text_output: document.getElementById('text_output')
};

/*      Event listeners     */
page_elements.branching_factor.addEventListener('change', () => {update(STATE_PROPERTIES.BRANCHING_FACTOR)});
page_elements.depth.addEventListener('change', () => {update(STATE_PROPERTIES.DEPTH)});
page_elements.density.addEventListener('change', () => {update(STATE_PROPERTIES.DENSITY)});
page_elements.speed.addEventListener('change',  () => {update(STATE_PROPERTIES.SPEED)});
page_elements.node_size.addEventListener('change', () => {update(STATE_PROPERTIES.NODE_SIZE)});

page_elements.graph_type.forEach(option => {
    option.addEventListener('change', () => {update(STATE_PROPERTIES.GRAPH_TYPE); draw_graph(state.graph);});
});

function output_text(text) {
    page_elements.text_output.innerHTML = text;
}

function reset_output_text() {
    page_elements.text_output.innerText = 'Output Text';
}