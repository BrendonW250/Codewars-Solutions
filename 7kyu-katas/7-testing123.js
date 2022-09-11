// Your team is writing a fancy new text editor and 
// you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns 
// each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice 
// the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

function number(array){
    let result = []

    if (array.length == 0){
        return []
    }

    //every index gets displayed with the element in the array in that format
    for (let i=1; i<array.length; i++){
        result.push(`${i}: ` + array[i])
    }

    return result  
}