import calculator from './calculator';

describe('Adds two non-negative integers: ', () => {
	it('0 and 0', () => {
		let result = calculator.add(0, 0);
		expect(result).toEqual(0);
	});
	it('2 and 2', () => {
		let result = calculator.add(2, 2);
		expect(result).toEqual(4);
	});
	it('2 and 6', () => {
		let result = calculator.add(2, 6);
		expect(result).toEqual(8);
	});
});

describe('Substracts two non-negative integers: ', () => {
	it('4 from 10', () => {
		let result = calculator.subtract(10, 4);
		expect(result).toEqual(6);
	});
});

describe('Adds up values of elements in an array: ', () => {
	it('empty', () => {
		let result = calculator.sum([]);
		expect(result).toEqual(0);
	});
	it('with one element', () => {
		let result = calculator.sum([7]);
		expect(result).toEqual(7);
	});
	it('with two elements', () => {
		let result = calculator.sum([7, 11]);
		expect(result).toEqual(18);
	});
	it('with multiple elements', () => {
		let result = calculator.sum([1, 3, 5, 7, 9]);
		expect(result).toEqual(25);
	});
});

describe('Multiplies values of elements in an array: ', () => {
	it('with two elements', () => {
		let result = calculator.multiply([2, 4]);
		expect(result).toEqual(8);
	});

	it('with multiple elements', () => {
		let result = calculator.multiply([2,4,6,8,10,12,14]);
		expect(result).toEqual(645120);
	});
});

describe('Raises one number to the power of another number', () => {
	it('4 to the power of 3', function() {
		let result = calculator.power(4, 3)
		expect(result).toEqual(64);
	});
});

describe('Computes the factorial of: ', () => {
	it('0', () => {
		let result = calculator.factorial(0);
		expect(result).toEqual(1); // 0! = 1
	});

	it('1', () => {
		let result = calculator.factorial(1);
		expect(result).toEqual(1);
	});

	it('2', () => {
		let result = calculator.factorial(2);
		expect(result).toEqual(2);
	});

	it('5', () => {
		let result = calculator.factorial(5);
		expect(result).toEqual(120);
	});

	it('10', () => {
		let result = calculator.factorial(10);
		expect(result).toEqual(3628800);
	});
});
