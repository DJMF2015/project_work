//iteration

let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person){
  console.log(person[prop]);
}

//create object

let obj1 = {a:1, b: 2, c: 3}
let obj2 = Object.create(obj1);
obj2.d =4;
obj2.e = 5;

for (let prop in obj2){

  console.log(obj2[prop])
};
