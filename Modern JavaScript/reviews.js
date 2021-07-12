
// Write a function that takes a user and returns a login 
// count object for them, mapping their name to their loginCount. 
// Use a computed property to construct the object. 
// Our pre-written code will call your function for multiple users.


// function loginCount(user) {
//     return {[user.name]: user.loginCount};
//   }
  
//Write a function sum that sums numbers. It should take the numbers as rest parameters. 
//If no arguments are given, it should return 0.

// function sum(...sums) {
//     if (sums.length===0){
//       return 0
//     }
  //  console.log(sums.length)
//     return sums.reduce((a,b)=> a+b)
//   }

function numbers(...n){
 console.log(n);
 console.log(n.reduce((a,b)=> a+b));
}
numbers(15,15,15)