//Declare a named function that takes an array of numbers, and returns the sum, or total,
//of all of the numbers in the array.

//named function
const named = function(array){
  let total = 0;//can't be constant as cannot reassign
  for (let sum of array){
    total += sum
  }
  return total;
}
const numbs = [1,4,3,5,4]
console.log(named(numbs))

// Your function should return true if the given string is a key on the
// given object and false if the object does not have a key that matches the string.
// Store this function in an appropriately named variable to invoke it.
const objectHasKey = function(object, searchString){
  for (let key in object){
    if (searchString === key){//'wojteck'{
      return 'key found';
    }
  }
  return 'key not found';
}

const person = {
  name: 'wojtek',
  age: 35
}

const keyIsFound = objectHasKey(person, 'name');//object string to search s
const keyNotFound = objectHasKey(person, 'email');


console.log('keyIsFound - should be true:', keyIsFound);
console.log('keyNotFound - should be false:', keyNotFound);

//for..in is used to retrieve the key in an object . key can then be used to acces the objects.
for (var key in object){
  if (object === key){
    const value = object[key]
     console.log(`The ${key} is ${value};
  }
}

// for..of is used to iterate over each value in array if the element is an ARRAY ratehr than objects
// for..in is used to retrieve the key in an object . key can then be used to acces the objects.

for (var key of object){
  if (object === key){
    const value = object[key]
     console.log(`The ${key} is ${value};
  }
}
