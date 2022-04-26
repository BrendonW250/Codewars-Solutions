// Find the mean (average) of a list of numbers in an array.
// Information

// To find the mean (average) of a set of numbers add all of the numbers 
// together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. 
// In this example there are 4 numbers in the list.

// 16/4 = 4
function findAverage(nums){
    // set counter to see how many #'s there are
    let counter = 0

    // search the array for numbers only 
    // for all the #'s found increase the counter by 1
    for(let i=0; i<nums.length; i++){
        if(typeof nums[i] === 'number'){
            counter++
        }
    }
    // calculate the sum of the array and return the mean
    let sum = nums.reduce((acc,c) => acc+c)
    return sum / counter
}
