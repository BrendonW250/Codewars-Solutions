// You are going to be given a word. Your job is to return 
// the middle character of the word. If the word's length is 
// odd, return the middle character. If the word's length is 
// even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  //Code goes here!
//   have a variable for the length of the string
  let stringLength = s.length
  
//   loop through the string
  for (let i=0; i<stringLength; i++){
    //   if length of the string is odd return the element rounded down from 
    // calculated decimal
    if (stringLength % 2 !== 0){
      return s[Math.floor(stringLength/2)]
    }else { //otherwise return the middle element and the one before the middle
      return s[stringLength/2 - 1] + s[stringLength/2]
    }
  }
}