/*
    Handling for UI elements
    captures state and handles update communication with html elements

    Author: Dan Filler 9.2019
 */

const page_elements = {
    click_mode: document.getElementsByName("click_mode"),
};

page_elements.click_mode.forEach(option => {
    option.addEventListener('change', () => {
        state.map.click_mode(option.value);
    });
});