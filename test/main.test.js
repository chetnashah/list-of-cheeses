const expect = require('chai').expect;

describe('list-of-cheeses', () => {
    it('check list', () => {
        const list = require('../src/');
        expect(list).to.be.instanceOf(Array);
    });
    it('check size greater than 0', () => {
        const list = require('../src/');
        expect(list).to.have.length.greaterThan(0);
    });
});