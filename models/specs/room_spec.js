const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room(15)
    });
    it('should have area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 15);
    });
});