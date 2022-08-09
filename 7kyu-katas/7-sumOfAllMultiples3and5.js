// Your task is to write function findSum.

// Upto and including n, this function will return the sum 
// of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n){
    //using to get the sum of divisible numbers of 3 and 5
    let arr = []

    //looping through every number leading up
    //to the inputted number
    for (let i=0; i<=n; i++){
        if (i % 3 === 0){ //if the number is divisible by 3 push to array
            arr.push(i)
        }else if (i % 5 === 0){//if the number is divisible by 5 push to array
            arr.push(i)
        }
    }
    //find the sum of the array
    return arr.reduce((acc,c) => acc+c)
}