function LongestWord(sen) {

//assign variable to search matching words
 var wrd= sen.match(/\w+/g);

 // initalise varable for longest word
 var longest = wrd[0];

 for (var i=0; i<wrd.length; i++){
     if (wrd[i].length > longest.length ){
     longest = wrd[i];
     }
 }
  return console.log(longest);

}
// keep this function call here
LongestWord('christmas christmas is coming early');
