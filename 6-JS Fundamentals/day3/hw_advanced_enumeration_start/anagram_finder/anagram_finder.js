const AnagramFinder = function (words) {
    this.words = words.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

}


module.exports = AnagramFinder;


//convery to lowercase letters
//split word into chars
//compare individual letters of word with 'otherword' for equality
//if word is same length AND same chars then word = otherword eg cat/tak
