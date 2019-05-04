//
// const WordFrequency = function (words) {
// let text = 'THIS is a a CASE of of';
//   this.words = console.log(text.toLowerCase())
//
// }
//
//
// WordFrequency.prototype.isRepeat = function () {
//   // var word = this.words.split('')
//   const array = this.words.reduce(accum, repeat)
//      if ( accum.hasOwnProperty( word ) ) {
//       accum[repeat] += 1
//     }
//     else {
//       accum[repeat] = 1;
//     }
//    console.log(accum);
//     return  accum;
//
//   }
// WordFrequency();
  // 8. Reduce Exercise
   // Sum up the instances of each of these
   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

   const transportation = data.reduce(function(obj, item) {
     if (!obj[item]) {
       obj[item] = 0;
     }
     obj[item]++;
     return obj;
   }, {});

   console.log(transportation);

   const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];



   // let user = new Map();
   // user.set("name", "John");
   // user.set("age", "30");
   //
   // for (let [key, value] of user.entries()) {
   //  console.log(`${key}:${value}`); // name:John, then age:30
}
