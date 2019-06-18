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
update_elements.branching_factor.addEventListener('change', () => {update('branching_factor')});
update_elements.depth.addEventListener('change', () => {update('depth')});