// for of

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6];
for (const num of arr) {
  // console.log(num);
}

const greetings = "hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("np", "nepal");
map.set("in", "india");
map.set("usa", "united state of america");

console.log(map);

for (const [key, Value] of map) {
  console.log(key, ":", Value);
}

const myObj = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

// for (const [key, Value] of myObj) {
//     console.log(key, ":-", Value);
// }
