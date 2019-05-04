//es5 syntax:
const numbers = [2,4,5,6,7];
const threeTimes  = numbers.map(function(x) {
  return x * 3;
});console.log (threeTimes);

//ES6
const threeTimes1 = numbers.map((x) => {
  return x*3;
});console.log (threeTimes1);
//es6:
const threeTimes2 = numbers.map(x => {

  return x * 3;console.log (threeTimes2);
});

//all above are the same
const threeTimes3 = numbers.map( x =>  x * 3);
console.log (threeTimes3);
//impicit means if using just one line of code it is not necessary to declare return


//ARROW functions are anonymous.
//if we want function to have a name we can call soemthig like:
var square = x=> x * x;
console.log(square(4));//16

//but if more than one argument...we have to do soemthing like
var add = (a,b) => a + b;



function FirstFactorial(num) {
//recursive method
  if (num === 0){
  return 1;
  } else {
  return(num*FirstFactorial(num-1));
  }
}
//keep this function call here
console.log(FirstFactorial(4));

var n ;
function factorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
}
console.log(factorial(5));
