const assert = require('assert');
const Paint = require('../paint.js');

describe("Paint", function(){
    let paint;
    beforeEach(function(){
        paint = new Paint('red', 4);
    });
    it('should have color', function(){
        const actual = paint.color;
        assert.strictEqual(actual, 'red');
    });
    it('shoud have liters', function(){
        const actual = paint.liters;
        assert.strictEqual(actual, 4);
    });
});