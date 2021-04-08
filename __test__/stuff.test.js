require('../src/stuff.js');

describe('Stuff', () => {
	it('should do stuff', () => {
		const stuff = new Stuff();
		expect(stuff.do()).toEqual(43);
	});
});
