const user = {
  username: "majhi",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function majhi() {
//   let username = "majhintech";
//   console.log(this.username);
// }

// majhi();

// const majhi = () => {
//   let username = "majhintech";
//     console.log(this.username);
// }
// majhi();

const majhi = () => {
  let username = "majhintech";
  console.log(this);
};

// majhi()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 7));

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username : "majhi"});

console.log(addTwo(3, 7));

// const myArray = [2,3,5,4,6,3]

