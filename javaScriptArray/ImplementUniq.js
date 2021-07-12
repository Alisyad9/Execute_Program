function uniq(arr) {
      let emptyArray = [];
    // if (arr.length===0) {
    //     return emptyArray;
    // }
  
  
    // let newArray = arr;
    
    
  arr.forEach((element) => {
      console.log(emptyArray.push(element));
      if (!emptyArray.includes(element)) {
       emptyArray.push(element);
      }

  });
  
  return emptyArray;
  }

//   const array = [1, 1];
// uniq(array);

// console.log(array.length);
console.log(uniq([1, 1, 1, 1]));