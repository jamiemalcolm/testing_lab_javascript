const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function(){
    let decorator;
    let paint;
    beforeEach(function(){
        decorator = new Decorator('Bob');
        paint = new Paint('red', 4);
    });
    it('should have a name', function(){
        const actual = decorator.name;
        assert.strictEqual(actual, 'Bob');
    });
    it('should start with emoty stock', function(){
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    });
    it('should be able to add paint', function(){
        const actual = decorator.addPaint(paint);
        assert.deepStrictEqual(actual, ['red'])

    });
});