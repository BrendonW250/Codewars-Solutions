// Create a function with two arguments that will return an array of 
// the first (n) multiples of (x).

// Assume both the given number and the number of times to 
// count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x,n){
    let result = []

    // you're looping until the value of n
    // meaning whatever number n is you loop that many times
    // i is = 1 because 0 is not included in this problem
    for (let i=1; i<=n; i++){
        result.push(i*x) //As i increases, each i value will be multiplied by x

    }
    return result 
}