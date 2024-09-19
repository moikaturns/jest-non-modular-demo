require('../src/stuff.js');
const browserScript = require('@moikaturns/import-pob-code').load({file:'../src/stuffHackFree.js',exports:['Stuff']});

describe('Stuff', () => {
	it('should do stuff', () => {
		const stuff = new Stuff();
		expect(stuff.do()).toEqual(43);
	});
});

describe('Stuff hack free', () => {
	it('should do stuff', () => {
		const stuff = new browserScript.Stuff();
		expect(stuff.do()).toEqual(43);
	});
});
