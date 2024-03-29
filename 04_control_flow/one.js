// if

const isUserLoggedIn = true;

const temperature = 41;

// if (temperature < 30) {
//     console.log("less than 50");
// } else {
//     console.log("temparature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000
// if (balance > 500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 1250) {
//   console.log("less than 1250");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail ||loggedInFromGoogle) {
  console.log("User logged in");
}
