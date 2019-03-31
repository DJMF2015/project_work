var Enumeration = function() {}

Enumeration.prototype.forEach = function(array, callback){
  for(var item of array){
    callback(item);
  }
}

Enumeration.prototype.find = function(array, callback) {
  var foundItem;
  this.forEach(array, function(item){
    if(callback(item)){
      foundItem = item
    }
  })
  return foundItem;
};


Enumeration.prototype.map = function(array, callback) {
  const results = [];
  for (const obj of array){
    results.push(callback(obj));
  }
  return results;
}

Enumeration.prototype.filter = function(array, callback){
  var results = [];
  for (const object of array){
    if (callback(object)){
      results.push(object);
    }
  }
  return results; //was returning too early from block
};


Enumeration.prototype.some = function(array, callback){
  let result = false;
  for (const number of array) {
    if (callback(number)){
      return true
    }
  }
  return result;
}

Enumeration.prototype.some = function(array, callback){
  let result = false;
  this.forEach(array, (number) => { //forEach loop (same as for loop above)
    if (callback(number)){
      result = true
    }
  });
  return result
}

Enumeration.prototype.every = function(array, callback){
  var result = true;
  this.forEach(array, (number) => { //[1,2,3,4..]
    if (!callback(number))
    result = false
  })
  return result
}

Enumeration.prototype.every = function (array, callback) {
  const results = [];
  for (let number of array){
    if(callback(number))
    results.push(number) //add to array if true
  }
  return results.length === array.length; //returns results for true
}

//reduce takes 4 args (accumulator, current value, current index, array) returns acc as a single vaue from all iterations
Enumeration.prototype.reduce = function(array, accumulatingCallback){

  return array.reduce((accumulator, accumulatingCallback) => accumulator + accumulatingCallback, 0);

};

Enumeration.prototype.reduce = function( array, accumulatingFunction ) {
  var accumulator = 0;
  this.forEach( array, function( currentValue ) {
    accumulator = accumulatingFunction( accumulator, currentValue );
  });
  return accumulator;
};

module.exports = Enumeration;
