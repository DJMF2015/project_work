const IsogramFinder = function (words) {
  this.words = words.toLowerCase()
}
//split each letter from words
//use every method to return the values based upon ondition
//writer helper method eg)unique()
//in helper method select unique letters by use of indexOF and lastIndexOF to get last element or -1

IsogramFinder.prototype.isIsogram = function () {
  return this.words.split('').every(character => this.isUnique(character));
};

IsogramFinder.prototype.isUnique = function (char) {
return this.words.indexOf(char) ===  this.words.lastIndexOf(char) 
};
module.exports = IsogramFinder;
