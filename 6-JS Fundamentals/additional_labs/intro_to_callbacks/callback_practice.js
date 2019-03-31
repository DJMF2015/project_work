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
redChecker("Print out this message!", "red", logred, logNotRed);

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

//function callbacks

function getTweetsAsync(callback){
  //go get the tweets...
  setTimeout(function(){
    let tweets = "These are the tweets"
    callback(tweets);
  }, 1000);

}

let myTweets = "Trump";
getTweetsAsync(function(tweets){
  myTweets = tweets;
});
console.log(myTweets);

//3
const getSomethingFromTheShop = function(budget, callback) {
  console.log("I have " + budget + " to go to the shop");
  const wanted = "the earth...";
  const got = "Mars bar";

  callback(wanted, got);
};

//getSomethingFromTheShop execute sthe callback and passes to the returning function whic accepts an arg and callback that
//returns the agumnets as output . Higher order functios either take a function as an argument OR return a function as output.
//A callback is a function and functions in js are first class objects as can be referenced by vars and passed to other functions like varibles.
getSomethingFromTheShop("nae money", function(request, response) {
  console.log("I wanted " + request + "but all I got was a " + response);
});
