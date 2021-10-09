// function add(a,b){
//     return a + b;
// }

// let num= add(2,2);

// console.log(add(1,2));
// console.log(num)

// const array = [];
// setTimeout(() => {

//   setTimeout(() => {
//     array.push('it worked');
//   }, 0);

// }, 0);

// console.log( array );

const users = [
  { id: 1, name: "Amir" },
  { id: 2, name: "Betty" },
];

function getUser(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(user);
    } else {
      reject(new Error("no such user"));
    }
  });
}

console.log(getUser(1));
