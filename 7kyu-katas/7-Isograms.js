// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only 
// letters is an isogram. Assume the empty string is an 
// isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    //...
  //   convert all letters in str to lowercase
    let lower = str.toLowerCase()
    
  //   convert str to an array
    let toArr = lower.split('')
    
  //   sort the array
    let sort = toArr.sort()
    
  //   loop through sorted array and if 
  //   the current element and the element 
  //   next to it are equal return false else return true
    for (let i=0; i<sort.length; i++){
      if (sort[i] == sort[i+1]){
        return false
      }
    }
    return true
  }