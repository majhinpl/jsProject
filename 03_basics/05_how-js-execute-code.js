// Javascript execution context

// globle execution context

// Function execution content
// Eval Execution cintext

// Memory creation phase
// Execution phase

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// 1. Globle Execution - this
// 2. Memory phase
// __ val1 - undefined
// __ val2 - undefined
// __ addNum - Defination
// __ result1 - undefined
// __ result2 - undefined

// 3. Execution phase
//  val1 - 10
//  val2 - 5
// addNum - // every function crate new execution phase

// call stack

