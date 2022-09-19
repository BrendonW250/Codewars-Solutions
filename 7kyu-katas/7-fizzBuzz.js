// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Return an array
function fizzbuzz(n)
{
  //
  let arr = []
  
//   putting every number between 1 & 10 in arr
  for (let i=1; i<=n; i++){
    arr.push(i)
  }
  
//   going through arr for expected outcomes
  for (let i=0; i<arr.length; i++){
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0){
      arr.splice(i, 1, "FizzBuzz")
    }else if (arr[i] % 5 == 0){
      arr.splice(i, 1, 'Buzz')
    }else if (arr[i] % 3 == 0){
      arr.splice(i, 1, 'Fizz')
    }
  }
  return arr
}


function fizzBuzz(n){
  let result = []

  // changes
  for (let i=1; i<=n; i++){
    result.push(i)
  }

  for (let i=0; i<result.length; i++){
    if (result[i] % 3 == 0 && result[i] % 5 == 0){
      result.splice(i, 1, 'fizzbuzz')
    }else if (result[i] % 5 == 0){
      result.splice(i, 1, 'fizz')
    }else if (result[i] % 3 == 0){
      result.splice(i,1,'buzz')
    }
  }
  return result
}