const chance = {
	between: (min, max) => { // random value between min,max
		return Math.random() * (max - min) + min
	},
	intBetween: (min,max) => {
		return Math.floor(chance.between(min,max))
	},
	oneOf: (a) => {//choose random elt of array a
		return a[chance.intBetween(0,a.length)];
	},
	color: (b) => { //random rgb color string, b is ~brightness
		let red = chance.intBetween(b,255),
			green = chance.intBetween(b,255),
			blue = chance.intBetween(b,255);
		return `rgb(${red},${green},${blue})`;
	}
}

//export default chance;