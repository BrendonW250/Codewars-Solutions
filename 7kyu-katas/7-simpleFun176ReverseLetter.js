// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    //coding and coding..
    let result = [] //output array
    let toArr = str.split('') //Converting the string to an array
    
    let alphabet = ['a','b','c','d','e','f','g','h','i',
                    'j','k','l','m','n','o','p','q','r','s','t',
                    'u','v','w','x','y','z']
    
  //   looping through arr with inputted string elements
  //   and arr with all letters in alphabet
  //   and compare to see if the input's elements are in the
  //   alphabet
    for (let i=0; i<toArr.length; i++){
      for (let j=0; j<alphabet.length; j++){
        if (toArr[i] == alphabet[j]){
          result.push(toArr[i]) //If they are push them into the output array created above
        }
      }
    }
    let reversed = result.reverse() //reverse the outputted array
    return reversed.join('') // convert the array back to a string and return the output
    
    
  }