// Array

const myArray = [0, 1, 2, 3, 4, 5];

const myHeros = ["shaktiman", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArray[0]);

// Array Methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop(1);

// myArray.unshift(9); // to add new value
// myArray.shift(); // to remove

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(2));

// const newArr = myArray.join()

// console.log(myArray);

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);
console.log("C ", myArray);
