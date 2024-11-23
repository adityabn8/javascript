// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

//bigint
const bigNum = 3427428234626234672465n

console.log(id === anotherId);



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "aditya", "naagraj", "doga"]
let myObj = {
  name:"Aditya",
  age:"22",
}


const myFunc = function(){
  console.log("Hello, World!");
}

console.log(typeof(myFunc)); //function
console.log(typeof(heros)); //object
console.log(typeof(bigNum)); //bigint


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive datatypes), Heap (Non-Primitive datatypes)

let myName = "aditya"

let anotherName = myName
anotherName = "adityanagathan"

console.log(myName);
console.log(anotherName);

let userOne = {
  name:"Aditya",
  age:22,
}

let userTwo = userOne

userTwo.age=25

console.log(userOne);
console.log(userTwo);

