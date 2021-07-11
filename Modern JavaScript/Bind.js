// function getAddressString() {
//     return `${this.city}, ${this.country}`;
//   }
//   const address = {
//     city: 'Paris',
//     country: 'France',
//   };

//   getAddressString.bind(address);

  // console.log(getAddressString.bind(address)());

 
// const user = {name: 'Amir'};
// function userName() {
//   return this.name;
// }
// userName.bind(user)();

// console.log(userName.bind(user)());


// Depending on where you run that example – in a browser, at a Node REPL, etc. – you may see a different error message. But you can be sure that this won't refer to the containing address object. It might be window or undefined or something else.

// We can use JavaScript's bind method to manually set our inner function's this:



const address = {
  city: 'Paris',
  country: 'France',
  addressString() {
    const f = function() {
      return `${this.city}, ${this.country}`;
    };
    return f.bind(this);
  },
};
address.addressString()();

console.log(address.addressString()());