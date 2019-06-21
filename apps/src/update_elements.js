/*
*   Handles updates to UI update elements and mapping their results to state
*
*   Author: Dan Filler 6.2019
 */

const update_elements = {
    branching_factor: document.getElementById("branching"),
    depth: document.getElementById("depth"),
    density: document.getElementById("density"),
    node_size: document.getElementById("node_size"),
    speed: document.getElementById("speed"),
    graph_type: document.getElementsByName("graph_type")
};

/*      Event listeners     */
update_elements.branching_factor.addEventListener('change', () => {update(STATE_PROPERTIES.BRANCHING_FACTOR)});
update_elements.depth.addEventListener('change', () => {update(STATE_PROPERTIES.DEPTH)});
update_elements.speed.addEventListener('change', () => {update(STATE_PROPERTIES.SPEED)});
update_elements.node_size.addEventListener('change', () => {update(STATE_PROPERTIES.NODE_SIZE)});