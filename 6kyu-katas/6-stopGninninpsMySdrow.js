// Write a function that takes in a string of one or 
// more words, and returns the same string, but with 
// all five or more letter words reversed (Just like 
//     the name of this Kata). Strings passed in will 
//     consist of only letters and spaces. Spaces will 
//     be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns 
// "Hey wollef sroirraw" spinWords( "This is a test") => returns 
// "This is a test" spinWords( "This is another test" )=> returns
//  "This is rehtona test"

function spinWords(string){
    //TODO Have fun :)
  //   converting string to array
    let toArr = string.split(' ')
    
  //   mapping through the array
  //   if an element is less than 5 return that element
  //   else return that element reversed
    const length = toArr.map(function(word){
      if (word.length < 5){
        return word
      }else {
        return word.split('').reverse().join('')
      }
    })
  //   the output is returned as a string
  //   so I convert the array back to a string
    return length.join(' ')
  }