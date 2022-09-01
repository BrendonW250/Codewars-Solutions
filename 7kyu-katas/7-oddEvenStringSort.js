
// DESCRIPTION:
// Given a string s. You have to return another 
// string such that even-indexed and odd-indexed 
// characters of s are grouped and groups are space-separated 
// (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'


function sortMyString(S) {
    // your code here
    let result = []
    let oddNums = []
    let spaced = S.split('')
    
    for (let i=0; i<spaced.length; i++){
      if (i%2 == 0){
        result.push(spaced[i])
      }else if (i%2 !== 0){
        oddNums.push(spaced[i])
      }
    }
  let outcome1 = result.join('')
  let outcome2 = oddNums.join('')
  
  return outcome1 + ' ' + outcome2
}