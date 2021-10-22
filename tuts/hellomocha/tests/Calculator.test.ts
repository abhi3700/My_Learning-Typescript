import {expect} from 'chai';
import C from '../src/Calculator';

describe('calculate', function () {
	it('Sum', function() {
		let result = C.Sum(2, 3);
		expect(result).equal(5);
	});

	it('Difference', function() {
		let result = C.Difference(2, 3);
		expect(result).equal(-1);
	});
});