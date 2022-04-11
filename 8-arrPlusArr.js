
// I'm new to coding and now I want to get the 
// sum of two arrays...actually the sum of all 
// their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1,arr2){
    // get the sum of the first array
    let first = arr1.reduce((acc,c) => acc+c)

    // get the sum of the second array
    let second = arr2.reduce((acc,c) => acc+c)

    return first + second
}

// reduce array method has an accumulator and a current as a parameter
// which the current parameter adds whatever it is currently on to the accumulator
// and stores the final value