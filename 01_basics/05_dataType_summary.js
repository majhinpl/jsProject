// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "majhi",
  age: 22,
};

const myfunction = function () {
  console.log("hello", myObj);
};

// myfunction();

// console.log(typeof myfunction);

// Stack, Heap memories
let myName = "majhintech";

let anotherName = myName;
console.log(anotherName);

let userOne = {
  email: "user@gmail.com",
  upi: "user123",
};

let user2 = userOne;

console.log(user2);
user2.email = "user2@gmail.com";

console.log(user2);
