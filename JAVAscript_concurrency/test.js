// const array = [];
// array.push("before");

// let promise1 = Promise.resolve("some value");

// for (const i of [1, 2]) {
//   setTimeout(() => array.push("during " + i), 0);
// }
// array.push("after");
// array;

// const array1 = [];
// array1.push("before");

// const promise = Promise.resolve("some value")
//   .then(() => {
//     array1.push("then1");
//   })
//   .then(() => {
//     array1.push("then2");
//   })
//   .then(() => {
//     return array1;
//   });

// array1.push("after");
// promise;
// a;
// const users = [
//   { id: 1, name: "Amir" },
//   { id: 2, name: "Betty" },
// ];

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     const user = users.find((user) => user.id === id);
//     if (user) {
//       resolve(user);
//     } else {
//       reject(new Error("no such user"));
//     }
//   });
// }
// getUser(1);
// console.log(getUser(3));

const test = new Promise((resolve) => resolve(5));

console.log(test);

const new2 = Promise.resolve(5)
  .then((n) => {
    console.log("first then");
    return new Promise((resolve) => {
      setTimeout(() => resolve(n + 1), 1000);
    });
  })
  .then((n) => {
    console.log("second then");
    return n * 2;
  });

console.log(new2);
