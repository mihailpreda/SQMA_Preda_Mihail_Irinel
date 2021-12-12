const Calculator = require('./Calculator');

describe('CalculatorMultiplicationDivision', () => {
	test('Multiplication - Given 3 and 4, should be equal with 12', () => {
		const given = {
			a: 3,
			b: 4,
		};

		const expected = 12;

		const actual = Calculator.multiply(given.a, given.b);

		expect(actual).toEqual(expected);
	});
	test('Division - Given 20 and 5, should be equal with 4', () => {
		const given = {
			a: 20,
			b: 5,
		};

		const expected = 4;

		const actual = Calculator.divide(given.a, given.b);

		expect(actual).toEqual(expected);
	});
});
