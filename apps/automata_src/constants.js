/*
    Constants for use in Finite Automata Animator
    An example of the beautiful object-literal-as-data-structure pattern in JavaScript
    (better name tbd)

    Author: Dan Filler 9.2019
 */

const INPUT_PARAMETERS = {
    click_mode: 'click_mode'
};

const CLICK_MODES = {
    add_nodes: 'add_nodes',
    add_transitions: 'add_transitions',
    delete: 'delete',
    change_q0: 'change_q0',
    add_final: 'add_final',
};

const COLORS = {
    BLACK: '#000000',
    RED: '#FF1C1C',
    BLUE: '#16A6FF',
    GREEN: '#06B45A',
    YELLOW: '#FFD11C',
    WHITE: '#FFFFFF',
    ORANGE: '#FF7C1E',
};

const NODE_RADIUS = 30;
const NODE_BORDER_OFFSET = 4;