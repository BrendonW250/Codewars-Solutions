// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

function sum(numbers){
    if (numbers.length == 0){
        return 0
    }

    let result = numbers.reduce((acc,c) => acc+c)

    return result
}