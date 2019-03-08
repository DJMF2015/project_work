var Enumeration = function() {}

Enumeration.prototype.forEach = function(array, callback){
  for(var item of array){
    callback(item);
  }
}

Enumeration.prototype.find = function(array, booleanFunction) {
  var foundItem;
  this.forEach(array, function(item){
    if(booleanFunction(item)){
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


Enumeration.prototype.some = function(array, booleanFunction){
  var result = false;

  return result;
}


Enumeration.prototype.every = function(array, booleanFunction){
  var result = true;

  return result;
};

Enumeration.prototype.reduce = function(array, accumulatingFunction){
  var accumulator = 0;


  return accumulator
};


module.exports = Enumeration;
