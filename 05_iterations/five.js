const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoading = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
  {
    languageName: "typescript",
    languageFile: "ts",
  },
];

myCoading.forEach((item) => {
    console.log(item.languageFile);
})