const assert = require('assert');
const Room = require('../room.js');

describe ('Room', function () {
let room;
  beforeEach(function() {
    room = new Room(25);
  });

  it('has area', function () {

    const actual = room.area;
    const expected = 25;

    assert.strictEqual(actual, expected);

  });

  it('hasn\'t been painted', function(){
    const actual = room.paintStatus;
    assert.strictEqual(actual, false);
  });

  it('has been painted', function(){
    room.paintRoom();
    const actual = room.paintStatus;
    assert.strictEqual(actual, true);
  });
});
