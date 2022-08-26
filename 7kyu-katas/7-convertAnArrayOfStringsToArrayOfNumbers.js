// Oh no!
// Some really funny web dev gave you a sequence 
// of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence 
// of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
  
    let result = []
    
    for (let i=0; i<stringarray.length; i++){
      result.push(parseFloat(stringarray[i])) //parseFloat converts any float that is a string to a int type and remains its float status
    }
    return result
  }