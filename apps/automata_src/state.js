/*
*	State tracking for automata, page, and animation information
*
*	Author: Dan Filler 6.2019
*/

const map = {
    click_mode: (value) => {
        page_elements.click_mode.forEach((option) => {
            state.automata.new_transition = {};
            if (option.checked) state.click_mode = option.value;
        });
    }
};

function initState() {
    /* automata information */
    const num_states = 5;
    const automata = {};
    
    /* animation information */
    const frames = [];
    const animation_timer = null;
    const animation_handler = null;
    const speed = 100;
    const currently_animating = false;

    /* canvas information */
    const canvas = document.getElementById("viewport");
    const context = canvas.getContext('2d');
    const click_mode = CLICK_MODES.add_states;

    let state = {
        automata,
        num_states,

        frames,
        animation_timer,
        animation_handler,
        speed,
        currently_animating,

        canvas,
        context,
        click_mode,

        map
    };

    state.automata = new Automata(state);
    
    return state;
}

