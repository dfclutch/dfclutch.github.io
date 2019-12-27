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

const animation_speed = 120;
const opacity_gradient = 8;
let percent_white = 50;
let max_width = 150;
let min_height = 50;
let max_height = 200;
const separation_dist = 2;

window.onload = () => {
	canvas = document.getElementById("animation_canv");
	context = canvas.getContext('2d');
	page = document.getElementById("page-home")
	canvas.width = page.offsetWidth - 5;
	canvas.height = page.offsetHeight - 5;

	adjust_sizing();

	animate();
}

window.onresize = () => {
	clearInterval(animation_timer);
	canvas.width = page.offsetWidth - 5;
	canvas.height = page.offsetHeight - 5;
	adjust_sizing();
	animate();
}

/*
	adjust sizing parameters for different sized screens
*/
function adjust_sizing() {
	if(page.offsetWidth < 400) {
		max_width = 80;
		min_height = 20;
		max_height = 150;
		percent_white = 40;
	} else {
		percent_white = 50;
		max_width = 150;
		min_height = 50;
		max_height = 200;
	}
}

/*
	Constructor for circle object
*/
function Rectangle(w, h) {
	const upper_opacity = 80;
	const lower_opacity = 20;

	this.width = w;
	this.height = h;

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
			this.opacity += chance.between(0, opacity_gradient);
			if (this.opacity > 100) {
				this.increase_opacity = false
				this.opacity = 100;
			}
		} else {
			this.opacity -= chance.between(0, opacity_gradient);
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

		let column_width = chance.between(1, max_width);

		while(total_height < canvas.height) {
			let h = chance.between(min_height, max_height);


			if(chance.between(0, 100) > percent_white) {
				let r = new Rectangle(column_width, h)
				r.offset = {x: total_width, y: total_height}
				col.push(r);
			}


			total_height += h + separation_dist;
		}
		total_width += column_width + separation_dist;
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

