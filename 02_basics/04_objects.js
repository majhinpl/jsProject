// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "majhintech";

tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "majhi",
      lastname: "intech",
    },
  },
};
// console.log(regularUser.fullname);

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "a", 4: "b" };
const object4 = { 5: "a", 6: "b" };

// const object3 = {object1, object2}

// const obj3 = Object.assign({}, object1, object2, object4);
// console.log(obj3);

const obj3 = { ...object1, ...object2, ...object4 }; // Sprede method
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "m@email.com",
  },
  {
    id: 1,
    email: "m@email.com",
  },
  {
    id: 1,
    email: "m@email.com",
  },
  {
    id: 1,
    email: "m@email.com",
  },
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor
const { courseInstructor: instructor } = course;

// console.log(instructor)

const navbar = ({ company }) => {};

// navbar(company = "hitesh")

// json

// {

//   "coursename": "js in hindi",
//   "price": 999,
//   "courseInstructor": "hitesh"

// }
// https://api.github.com/users/majhintech
