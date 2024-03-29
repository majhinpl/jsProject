function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("J");
  console.log("H");
  console.log("I");
  console.log("N");
  console.log("T");
  console.log("E");
  console.log("C");
  console.log("H");
}
// sayMyName()

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
  //   let result = num1 + num2
  //   return result

  return num1 + num2;
}

const result = addTwoNum(3, 5);

// console.log("result ", result);

function loginUserMsg(username = "sam") {
  if (!username) {
    console.log("Pleae enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMsg("majhintech"))
// console.log(loginUserMsg("majhintech"));

function calCardPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calCardPrice(100,200, 400, 600, 1000));

const user = {
  username: "majhintech",
  prire: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.prire}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 600, 700];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
