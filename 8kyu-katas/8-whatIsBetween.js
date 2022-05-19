// Complete the function that takes two integers (a, b, where a < b) 
// and return an array of all integers between the input parameters, 
// including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a,b){
    // create arr needed for output
    let arr = []

    // loop from given a value to given b value
    for (let i=a; i<b+1; i++){
        // push every element touch by i into the output arr
        arr.push(i)
    }
    // return output arr
    return arr
}