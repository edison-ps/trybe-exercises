
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];



function flatten() {
//   // escreva seu código aqui
//   return arrays.map((value) => { 
//     console.log(value);
//     value.reduce((accumulator, currentValue) =>  {
//       return currentValue;
//     });
//   });
// }
  // escreva seu código aqui
    arrayReturn = [];
    arrays.map((value) => { 
      value.reduce((accumulator, currentValue) =>  {
        //console.log(currentValue);
        arrayReturn.push(currentValue);
        return accumulator;
      }, '');
    });
  return arrayReturn;
}
   
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);