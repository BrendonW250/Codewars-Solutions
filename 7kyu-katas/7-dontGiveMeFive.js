// In this kata you get the start number and the end number of a region and should
//  return the count of all numbers except numbers with a 5 in it. 
//  The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end){
    // create a counter to keep track of how many elements don't have 5
    let count = 0

    // create a for loop that starts at the start value and ends at the end value (inclusive)
    for (let i=start; i<=end; i++){
        // says if the any element that was converted to a string doesn't include 5 increase the count variable by 1
        if (!i.toString().includes('5')){
            count++
        }
    }
    return count
}