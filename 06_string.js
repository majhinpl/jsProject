const name = "majhi";
const repoCount = 50;

// console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("majhintech-intech");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt([5]));
// console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-5, 5);
console.log(anotherString);

const newStringOne = "  majhintech  ";
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://majhintech.com/majhin%20tech";

console.log(url.replace("%20", "_"));

console.log(url.includes("sundar"));

console.log(gameName.split("_"))
