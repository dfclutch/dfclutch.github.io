/*
    Common graphics utilities shared across apps

    Author: Dan Filler 9.2019
 */
const graphics = {
    clear_canvas: (canvas, context) => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
    },
    get_click_coord_in_canvas: (event) => {
        const rect = state.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return {
            x,
            y
        };
    }
};