const IsogramFinder = function (words) {
  this.words = words.toLowerCase();
}
//split each letter from words
//use every method to return the values based upon ondition
//writer helper method eg)unique()

IsogramFinder.prototype.isIsogram = function () {
  return this.words.split(',').every()

};

module.exports = IsogramFinder;
