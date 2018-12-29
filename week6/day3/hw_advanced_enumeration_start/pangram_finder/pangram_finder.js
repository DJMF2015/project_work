// A pangram is a sentence or phrase which contains every letter of the alphabet. "The quick brown fox jumps over the lazy dog." is probably the most notable pangram in English.
// // Given a sentence or phrase you should be able to determine whether or not every letter of the alphabet is included in it.

const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(word =>  this.phrase.includes(word));


}
module.exports = PangramFinder;
