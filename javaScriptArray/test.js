
function add(a,b){
    return a + b;
}

let num= add(2,2);

console.log(add(1,2));
console.log(num)

const array = [];
setTimeout(() => {

  setTimeout(() => {
    array.push('it worked');
  }, 0);

}, 0);

console.log( array );