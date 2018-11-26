const assert = require("assert");
const PaintCan = require('../paint_can.js');

describe ('PaintCan', function(){
  let paintcan;let emptyPaintCan;
  beforeEach(function(){
    paintcan = new PaintCan(25);
    emptyPaintCan = new PaintCan(0);
  });

  it('has paint', function(){
    const actual = paintcan.volume;
    const expected = 25;

    assert.strictEqual(actual, expected);
  });

  it('has no paint', function(){
    const actual = emptyPaintCan.volume;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('can empty paint from can', function(){
    paintcan.emptyPaint();
    const expected = true;
    assert.strictEqual(paintcan.isEmpty(), expected);
  });
});
