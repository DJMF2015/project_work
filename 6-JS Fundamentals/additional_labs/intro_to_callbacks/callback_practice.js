const logred = function (message){
  console.log(message)
}
const logNotRed = function() {
  console.log("It's NOT red!");
}
const redChecker = function(message, colour, isRed, isNotRed){
  if (colour == "red")  {
    isRed(message);//logred
  }
  else{
    isNotRed();//logNotRed
  }
}
// redChecker("Print out this message!", "red", logred, logNotRed);

// 1 Callback Exercises
const callback = function(number){
  console.log("my number is :" + number)
};
const functionCaller = function(myCallback, args){
  return myCallback(args);
}
functionCaller(callback, 8);//callback passed to line 22 that takes callback func and number
//to returns function call with number that is passed to callback function on line 18 to print


//2 maths fun
//increment
const increment = function(n){
  return n + 1;
};
const doSomeMathsForMe = function(n, func){
  return func(n)
}
//sqaure
const square = function(n){
  return n * n;
}

const doSomeMoreMathsForMe = function(n, foo){
  return foo(n);
}
console.log(doSomeMathsForMe(3, increment));//takes in a number ' n' and a function callbacks
//and executes the callback passing in the number as an argument and passing to returning function for execution
console.log(doSomeMoreMathsForMe( 6, square));
