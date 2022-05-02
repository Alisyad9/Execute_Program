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

//brew install git-gui
// const user = {
//   name: 'james',
//   age: 6,
// };

// console.log(user);

// const new2 = Promise.resolve(5)
//   .then((n) => {
//     console.log('first then', n);
//     return new Promise((resolve) => {
//       console.log(resolve);
//       setTimeout(() => resolve(n + 1), 1000);
//     });
//   })
//   .then((n) => {
//     console.log('second then', n);
//     return n * 2;
//   });

// console.log(new2);

const stateHistory = [];
let state = 'pending';
let resolve;

// Create a promise and store its resolve function.
new Promise((r) => {
  resolve = r;
}).then(() => {
  state = 'fulfilled';
});

// Resolve the promise after 1.5 seconds
setTimeout(resolve, 1500);

// Check the promise's state once per second.
// setTimeout(() => {
stateHistory.push(state);
// }, 0);
setTimeout(() => {
  stateHistory.push(state);
}, 1000);
setTimeout(() => {
  stateHistory.push(state);
}, 2000);

stateHistory;
