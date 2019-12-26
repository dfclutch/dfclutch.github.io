/*
	A cool animation for the home page!

	Author: Dan Filler 12/26/2019
*/

let circle_radius = 5;
const colors = [
	"#d41919",
	"#0398fc",
	"#fca103",
	"#2bc47d"
	];
let canvas, context, page, animation_timer;
const animation_speed = 100;

window.onload = () => {
	canvas = document.getElementById("animation_canv");
	context = canvas.getContext('2d');
	page = document.getElementById("page-home")
	canvas.width = page.offsetWidth - 5;
	canvas.height = page.offsetHeight - 5;

	animate();
}

window.onresize = () => {
	clearInterval(animation_timer);
	canvas.width = page.offsetWidth - 5;
	canvas.height = page.offsetHeight - 5;
	animate();
}

/*
	Constructor for circle object
*/
function Rectangle() {
	const upper_opacity = 80;
	const lower_opacity = 20;

	this.width = chance.between(1, 20);
	this.height = chance.between(50, 500);

	this.color = colors[Math.floor(Math.random() * colors.length)];
	this.opacity = chance.between(0, 100);
	this.increase_opacity = this.opacity < upper_opacity;

	this.draw = () => {
		context.beginPath();
		context.globalAlpha = this.opacity / 100;
		context.fillStyle = this.color;
		context.fillRect(this.offset.x,
						this.offset.y,
						this.width,
						this.height);
	}


	this.update_opacity = () => {
		if (this.increase_opacity) {
			this.opacity += chance.between(0, 20);
			if (this.opacity > 100) {
				this.increase_opacity = false
				this.opacity = 100;
			}
		} else {
			this.opacity -= chance.between(0, 10);
			if (this.opacity < 20) {
				this.increase_opacity = true;
				this.opacity = 20;
			}
		}
	}
}

/*
	util to clear canvas
*/
function clear_canvas() {
	context.clearRect(0,0,canvas.width, canvas.height);
}

/*
	animation loop
*/
function animate() {
	let col_list = [];
	let total_width = 0;

	// build set of rectangles
	while(total_width < canvas.width) {
		let col = [];
		let total_height = 0;

		let r = new Rectangle();
		r.offset = {x: total_width, y: total_height}
		let column_width = r.width;
		col.push(r);
		while(total_height < canvas.height) {
			total_height += r.height + 2;
			r = new Rectangle();
			r.width = column_width;
			r.offset = {x: total_width, y: total_height}
			col.push(r)
		}
		total_width += column_width + 2;
		col_list.push(col);
	}

	animation_timer = setInterval(() => {
		clear_canvas();
		col_list.forEach(col => {
			col.forEach(r => {
				r.draw()
				r.update_opacity();
			});	
		})
	}, animation_speed)

}

