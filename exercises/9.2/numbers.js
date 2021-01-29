function generateArrya(arrayLength, maxValue) {
    const arrayNumbers = [];
    for(let index = 0; index < arrayLength; index += 1) {
      arrayNumbers[index] = parseInt(Math.random () * maxValue);
    }
    return arrayNumbers;
  }

function exponential(numbers) {
  return numbers.reduce((accumulator, value) => accumulator += Math.pow(value, 2),0);
}
const promisse = new Promise((resolve, reject) => {
  const result = exponential(generateArrya(10, 50));
  if (result < 8000) {
    resolve(result);
  } else {
    reject(result);
  }
})
.then((result) => {
  console.log(` Sucesso - ${result}`)
  return result
})
.then((result) => {
  const arraySum = [];
  arraySum.push(parseInt(result / 2));
  arraySum.push(parseInt(result / 3));
  arraySum.push(parseInt(result / 5));
  arraySum.push(parseInt(result / 10));
  return arraySum;
})
.then((array) => array.reduce((accumulator, value) => accumulator += value), 0)
.then((result) => console.log(` O resultado total da soma é ${result}`))
.catch((result) => console.log(`É mais de oito mil! Essa promise deve estar quebrada! - ${result}`));


//  console.log(exponential(generateArrya(10, 50)));