// Write a function named sumDigits which takes 
// a number as input and returns the sum of the 
// absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number){
    let sum = 0

    // finding the absolute value of input
    // turning it to a string and then to an array
    let arr = Math.abs(number).toString().split('')

    // looping through the arr to get each element and find the combined sum of 
    // all the elements in the arr
    arr.forEach(i => {
        sum += parseInt(i) //turning the sum into an integer
    })

    return sum
}