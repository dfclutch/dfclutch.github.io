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
	nOf: (n, a) => { // return length n array of random elements of a, requires n < a.length
		let indices = [],
			output = [];
		while (indices.length < n) {
			let candidate = chance.intBetween(0, a.length);
			if (!indices.includes(candidate)) {
				indices.push(candidate);
				output.push(a[candidate]);
			}
		}
		
		return output;
	},
	color: (b) => { //random rgb color string, b is ~brightness
		let red = chance.intBetween(b,255),
			green = chance.intBetween(b,255),
			blue = chance.intBetween(b,255);
		return `rgb(${red},${green},${blue})`;
	}
}

//export default chance;