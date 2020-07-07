const { charIndexOf } = require('./index');

describe('CharIndexOf checking... ', () => {
	test('Has to find first index of symbol', () => {
		expect(charIndexOf('This is a fine day', 'd')).toBe(15);
	})

	test('Has to find first index of symbol', () => {
		expect(charIndexOf('People at the windows', 'w')).toBe(14);
	})

	test('No such symbol, has to return "-1" ', () => {
		expect(charIndexOf('Equador', 'e')).toBe(-1);
	})

})