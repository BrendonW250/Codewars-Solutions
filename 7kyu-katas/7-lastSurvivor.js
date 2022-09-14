// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed,
//  in order, starting from the beginning of the array.
// After each removal the size of the string decreases
//  (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

function lastSurvivor(letters, coords){
    let toArr = letters.split('')

    //looping through the array with integers and starting the
    //splicing method from wherever i is and removing just that element
    //from the array with letters
    for (let i=0; i<coords.length; i++){
        toArr.splice(coords[i], 1)
    }
    //converting the mutated array back to a string
    return toArr.join('')
}