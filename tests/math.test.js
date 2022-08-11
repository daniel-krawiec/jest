const { adding, multiplying, substracting, dividing } = require('../src/math');

it('checks if 6 + 2 = 8', () => {
	expect(adding(6, 2)).toBe(8);
});

it('checks if 6 * 2 = 12', () => {
	expect(multiplying(6, 2)).toBe(12);
});

it('checks if 6 - 2 = 4', () => {
	expect(substracting(6, 2)).toBe(4);
});

it('checks if 6 / 2 = 3', () => {
	expect(dividing(6, 2)).toBe(3);
});
