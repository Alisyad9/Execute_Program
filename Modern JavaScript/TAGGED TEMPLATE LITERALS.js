
function returnsItsArguments(strings, ...values) {
    return {
      firstArg: strings,
      secondArg: values,
    };
  
  
  }
console.log(returnsItsArguments`first${'second'}`);
  
  returnsItsArguments`12${2}3`
  
  returnsItsArguments`the numbers ${1} and ${2}`;

  console.log( returnsItsArguments`the numbers ${1} and ${2}`);

function doubleNumbers(strings, ...values) {

    // let double= values
    let newValue= values.map(element=> element*2)
  
    // console.log(newValue).
    
    let result = '';
    for (let i=0; i<strings.length; i++) {
      result=result+strings[i]
      // console.log(result);
      if(i<values.length){
        result=result+ newValue[i]
  
      }
      
  
    }
  return result 
  }
  // doubleNumbers`the numbers ${1} and ${2}`;

  // function doubleNumbers(strings, ...values) {
  //   let result = '';
  //   for (let i=0; i<strings.length; i++) {
  //     result += strings[i];
  //     if (i < values.length) {
  //       result += (2 * values[i]).toString();
  //     }
  //   }
  //   return result;
  // }
  