// Write a factorial function for the input

function factorial(n){

    // base case
    if (n == 0){
        return 1
    }else {
        // recursion where the sum of the below statement becomes the new n
        // until n hits 0
        return n * factorial(n-1)
    }

    
}

factorial(5)
// 5 * 4 = 20
// 20 * 3 = 60
// 60 * 2 = 120
// 120 * 1 = 120