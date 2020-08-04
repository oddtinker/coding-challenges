const calculator = {
	add: function (x, y) {
		return x + y;
	},

	subtract: function (x, y) {
		return x - y;
	},

	sum: function (arr) {
		let result = 0;
		while (arr.length > 0) {
			result += arr.pop();
		}
		return result;
	},

	multiply: function (arr) {
		let result = 1;
		while (arr.length > 0) {
			result *= arr.pop();
		}
		return result;
	},

	power: function(x, y) {
		return Math.pow(x, y);
	},

	factorial: function(x) {
		let result = 1;
		while (x > 0) {
			result = result * x;
			x--;
		}
		return result;
	}
}

export default calculator;