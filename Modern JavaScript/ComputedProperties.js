const users = [
    {name: 'Amir', loginCount: 5},
    {name: 'Betty', loginCount: 16},
  ];
  function loginCount(user) {
    return {[user.name]: user.loginCount};
    
   // {user.name +user.loginCount}
    
  }
  
  [
    loginCount(users[0]),
    loginCount(users[1]),
  ];

  console.log([
    loginCount(users[0]),
    loginCount(users[1]),
  ]);
//   GOAL:
//   [{Amir: 5}, {Betty: 16}]
//   YOURS:
//   [{Amir: 5}, {Betty: 16}]


// Write a numbersInRange(min, max) generator that iterates over all numbers from min up to, but not including, max.
function* numbersInRange(min, max) {
    for (let i=min; i<max; i++) {
      yield i;
    }
  }

  console.log([
    Array.from(numbersInRange(0, 2)),
    Array.from(numbersInRange(1, 5)),
   
  ]);
  

const letters = 'abc';
const [a, b, c] = letters;
b;