// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


function createPhoneNumber(numbers){
  
    //   splicing the first 6 elements out the array
      let spliced = numbers.splice(0,3)
      let spliceAgain = numbers.splice(0,3)
      
    //   converting the spliced elements to strings
      let str = spliced.toString()
      let str2 = spliceAgain.toString()
      
    //   didn't need to splice the last elements in the array
      let str3 = numbers.toString()
      
    //   Now we remove the commas from the strings
      let removeComma = str.replace(/,/g, '')
      let removeComma2 = str2.replace(/,/g, '')
      let removeComma3 = str3.replace(/,/g, '')
      
    //   returning the final string
      return `(${removeComma}) ` + `${removeComma2}-` + `${removeComma3}` 
    }