const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let deinonychus1;
  let stegosaurus1;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    deinonychus1 = new Dinosaur('Deinonychus', 'carnivore', 40);
    stegosaurus1 = new Dinosaur('Stegosaurus', 'omnivore', 15);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaur;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addDinos(deinonychus1);
    const actual = park.dinosaur;
    assert.deepStrictEqual(actual, [deinonychus1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinos(stegosaurus1);
    park.addDinos(deinonychus1);
    park.removeDino(deinonychus1)
    const actual = park.dinosaur;
    assert.deepStrictEqual(actual, [stegosaurus1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinos(stegosaurus1);
    park.addDinos(deinonychus1);
    const actual = park.mostPopular('Deinonychus');
    assert.deepStrictEqual(actual, deinonychus1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinos(stegosaurus1);
    park.addDinos(stegosaurus1);
    const actual = park.findSpecies('Stegosaurus')
    assert.deepStrictEqual(actual, stegosaurus1);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinos(deinonychus1);
    park.addDinos(stegosaurus1);
    park.removeDinosaur('Stegosaurus');
    const actual = park.dinosaur;
    const expected = [deinonychus1];
    assert.deepStrictEqual(actual, expected);

  });

});
