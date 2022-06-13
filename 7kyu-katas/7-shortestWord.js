// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need 
// to account for different data types.

function findShort(s){
    let toArr = s.split(' ')
   
    let least = toArr[0]
   
    for (let i=0; i<toArr.length; i++){
      if (toArr[i].length < least.length){
        least = toArr[i]
      }
    }
    return least.length
   
 }