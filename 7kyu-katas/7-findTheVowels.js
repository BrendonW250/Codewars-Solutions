// We want to know the index of the vowels in a given word, 
// for example, there are two vowels in the word super (the
//      second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    //your code here
    let result = []
    
  //   convert string to array
    let toArr = word.split('')
    
  //   create an array or all vowels
  //   upper and lowercase
    let upperAndLower = ['a','A','e','E','i','I','o','O','u','U','y','Y']
    
  //   loop through both created arrays and 
  //   compare the elements and push like indices to 
  //   output array
    for (let i=0; i<toArr.length; i++){
      for (let j=0; j<upperAndLower.length; j++){
        if (toArr[i] == upperAndLower[j]){
          result.push(i+1)
        }
      }
    }
    return result
  }
