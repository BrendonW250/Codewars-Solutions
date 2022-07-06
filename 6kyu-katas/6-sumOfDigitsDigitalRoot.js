// Given n, take the sum of the digits of n. If that value has more than 
// one digit, continue reducing in this way until a single-digit number is 
// produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// definetly not the recursive way!!
function digital_root(n){
  
    let result = 0
    
    // change int to array
    let toArr = Array.from(String(n), Number)
    
    // get the sum of the arr
    let semiResult = toArr.reduce((acc,c) => acc+c)
    
    // if that sum isn't down to 1 digit turn it to an arr
    let arr2 = Array.from(String(semiResult), Number)
    
    // if the arr has more than 1 element find the sum of those elements
    // then turn that value to an array again and return the sum
    if (arr2.length > 1){
      result = arr2.reduce((acc, c) => acc+c)
      
      let arr = Array.from(String(result), Number)
      return arr.reduce((acc,c) => acc+c)
    }else{ //the case where the sum is already a single digit number
      return semiResult
    }
  }

//   Recursive way of solving this problem
// function digital_root(n){
//     n = eval(n.toString().split('').join('+'));

//     if (n > 9) {
//         return digital_root(n);
//     }

//     return n;
// }