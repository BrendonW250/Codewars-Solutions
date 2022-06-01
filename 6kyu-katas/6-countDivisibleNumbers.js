// Complete the function that takes 3 numbers x, y and k (where x ≤ y), and 
// returns the number of integers within the range [x..y] 
// (both ends included) that are divisible by k.

// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because there 
// are three numbers divisible by 2 between 6 and 11: 6, 8, 10

// Note: The test cases are very large. You will need a O(log n) solution or better to pass. 
// (A constant time solution is possible.)

// More inefficient way of solving (what I came up with at first)
// function divisibleCount(x,y,k){
//     let count = 0

//     for (let i=x; i<y; i++){
//         if (i % k === 0){
//             count++
//         }
//     }
//     return count 
// }

// More efficient way
function divisibleCount(x,y,k){
    let totalDiv = Math.floor(y / k)
    let exclude = Math.floor((x-1) / k)

    // considered the count 
    let divInArr = totalDiv - exclude

    return divInArr
}