// You get an array of numbers, return the 
// sum of all of the positives ones.
// example: [1,-4,7,12] => 1+7+12 - 20

// you have an array of numbers

function positiveSum(arr){
    let total = 0

    for (let i=0; i < arr.length; i++){
        if (arr[i] > 0){
            total += arr[i]
        }
    }
    return total
}