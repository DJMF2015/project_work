var EnumLib = require('../enumeration.js');

var assert = require('assert');

describe('My Enumeration Library', function() {

  var myEnumLib = new EnumLib();

  var testArrayOfNumbers = [ 1, 2, 3, 4, 5, 6 ];
  var testArrayOfObjects = [
    { name: "John", instrument: "guitar" },
    { name: "Paul", instrument: "bass guitar" },
    { name: "George", instrument: "guitar" },
    { name: "Ringo", instrument: "drums" }
  ];

  it("can find an item in an array (the Beatle who plays drums)", function() {
    let foundBeatle = myEnumLib.find( testArrayOfObjects, function( beatle ) {
      return beatle.instrument === "drums";
    });
    assert.deepEqual(foundBeatle, { name: "Ringo", instrument: "drums" } )
  });

  it("can map an array (to doubles of the items)", function() {
    let conditionalLogic = function (number){
      return number * 2;
    }
    let result = myEnumLib.map(testArrayOfNumbers, conditionalLogic);

    assert.deepEqual( result, [ 2, 4, 6, 8, 10, 12 ])
  });

  it("can filter an array (to only even numbers)", function() {
    let conditionalLogic = function( number ) {
      return number % 2 === 0;
    }

    let result = myEnumLib.filter( testArrayOfNumbers, conditionalLogic);

    assert.deepEqual( result, [ 2, 4, 6 ])
  });

  it("returns true if *some* elements meet a condition", function() {
    assert.equal( myEnumLib.some( testArrayOfNumbers, function( number ) {
      return number > 3;//if first or subsequent over 3 return true
    }), true );
    assert.equal( myEnumLib.some( testArrayOfNumbers, function( number ) {
      return number > 100; //if 0 over 100 return false
    }), false );
  });

  it("returns true if *every* element meets a condition", function() {
    assert.equal( myEnumLib.every( testArrayOfNumbers, function( number ) {
      return number > 0;
    }), true )
    assert.equal( myEnumLib.every( testArrayOfNumbers, function( number ) {
      return number > 3;
    }), false )
  });

  it("can reduce an array (to the sum of its items)", function() {
    assert.equal( myEnumLib.reduce( testArrayOfNumbers, function( a, b ) {
      return a + b;
    }), 21 ) // 1 + 2 + 3 + 4 + 5 + 6 === 21
  });

})
