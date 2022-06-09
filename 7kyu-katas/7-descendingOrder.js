// Your task is to make a function that can take any 
// non-negative integer as an argument and return it 
// with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //...
    // Converting the number to an array with each digit being an element
    let arr = Array.from(String(n))
    
    // sorting and reversing the order of the array
    let revArr = arr.sort().reverse()
    
    // converting the array to a string
    let toNum = revArr.join('')
    
    // turning the string to an integer
    return parseInt(toNum)
  }