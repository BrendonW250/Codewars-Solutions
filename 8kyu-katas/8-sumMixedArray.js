// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let toNumber = []

    // loop through the given array
    for (let i=0; i<x.length; i++){
        // change each individual value from string to Number
        // and push to the new array
        toNumber.push(parseInt(x[i]))
        
    }
    // return the sum of the new array
    return toNumber.reduce((acc,c) => acc+c)
}