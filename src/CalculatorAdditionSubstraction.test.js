const Calculator = require('./Calculator');

describe('CalculatorAdditionSubstraction', () => {
	test('Addition - Given 1 and 2, should sums 3', () => {
		const given = {
			a: 1,
			b: 2,
		};

		const expected = 3;

		const actual = Calculator.add(given.a, given.b);

		expect(actual).toEqual(expected);
	});
	test('Substraction - Given 2 and 1, should be equal with 1', () => {
		const given = {
			a: 2,
			b: 1,
		};

		const expected = 1;

		const actual = Calculator.subtract(given.a, given.b);

		expect(actual).toEqual(expected);
	});
});
