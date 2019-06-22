/*
*   Set up and handling of button presses
*
*   Author: Dan Filler 6.2019
 */

const buttons = {
    btn_1: document.getElementById('btn_1'),
    btn_2: document.getElementById('btn_2'),
    btn_3: document.getElementById('btn_3'),
    btn_4: document.getElementById('btn_4'),
};

buttons.btn_1.addEventListener('click', () => {animators.tree.bfs()});