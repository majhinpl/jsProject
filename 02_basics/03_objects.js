//  singleton

// object literals

// Object.create // constractor

const mySym = symbol("key1");

const jsUser = {
  name: "majhintech",
  "full name": "majhi intech",
  [mySym]: "myKey1",
  age: 18,
  location: "saudi arabia",
  email: "majhintech@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser["email"]);

console.log(jsUser["full name"]);

console.log(jsUser[mySym]);

Object.freeze(jsUser);
jsUser.email = "majhintech@google.com";
