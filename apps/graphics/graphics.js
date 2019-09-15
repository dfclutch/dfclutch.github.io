/*
    Common graphics utilities - essentially an API over HTML Canvas - shared across apps

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
    },
    euclid_dist: (start, end) => {
        return Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
    },
    /*
        Puts [text] at position [coord] such that the text box is positioned as show, relative to [coord] = *.
        *___________
        |  TEXT   |
        ----------
     */
    text: (text, coord) => {
        state.context.beginPath();
        state.context.font = "12 px Arial";
        state.context.textAlign = "center";
        state.context.fillText(text,
            coord.x,
            coord.y
        );
    },
    centerpoint: (coord1, coord2) => {
        let x = (coord1.x + coord2.x) / 2;
        let y = (coord1.y + coord2.y) / 2;

        return new Coord(x, y);
    }
};

/*
    General coordinate in canvas. Just making as a better looking/behaving container

    Dan Filler - 9/12/2019
 */
function Coord(x, y) {
    this.x = x;
    this.y = y;
}