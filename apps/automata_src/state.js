/*
*	State tracking for automata, page, and animation information
*
*	Author: Dan Filler 6.2019
*/

function initState() {
    /* automata information */
    const num_states = 5;
    const automata = null;
    
    /* animation information */
    const frames = [];
    const animation_timer = null;
    const animation_handler = null;
    const speed = 100;
    const currently_animating = false;

    /* canvas information */
    const canvas = document.getElementById("viewport");
    const context = canvas.getContext('2d');

    let state = {
        automata,
        num_states,

        frames,
        animation_timer,
        animation_handler,
        speed,
        currently_animating,

        canvas,
        context
    };

    state.automata = new Automata(state);
    
    return state;
}

function update(prop_to_update) {
}
