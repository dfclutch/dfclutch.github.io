/*
*   Main controller for ap
*
*   Author: Dan Filler 6.2019
 */

/*      Global Vars     */
const state = {};

window.onload = () => {
    Object.assign(state, initState());
    console.log(state);
    draw_graph(state.graph);
}
