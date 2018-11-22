const mynumbs = [1,2,3,4,5];
// for (const number of mynumbs){;
//   console.log(number);
// }
// mynumbs.forEach((number, index, array)=>{
//   console.log(number, index, array)
// });
//

//const multiplyByTwo = function(numbers){
  //create array
  //multipy by 2
  //add/push array result
  //return array
  //call function using callback
  //   const result = [];
  //   numbers.forEach((number) => {
  //     const multiplied = number * 2;
  //     result.push(multiplied)
  //   };
  //   return result
  // }
  // const multipliedByTwo = multiplyByTwo(mynumbs);
  // console.log(multipliedByTwo);

    // const multiplyByTwo = function(numbers){
    //   const result  = mynumbs.map((number) =>{
    //     const multiplied = number * 2;
    //     return multiplied;
    //   });
    //   return result;
    // }
    // const multiply = multiplyByTwo(mynumbs)
    // console.log(multiply)

const ourForEach = function (array, callback){
  for (const element of array){
    callback(element);
  }
};
ourForEach(mynumbs, (number) =>{
  console.log(number);
})
