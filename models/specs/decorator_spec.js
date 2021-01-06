const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function(){
    let decorator;
    beforeEach(function(){
        decorator = new Decorator('Bob');
    });
    it('should have a name', function(){
        const actual = decorator.name;
        assert.strictEqual(actual, 'Bob');
    });
    it('should start with emoty stock', function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });
});