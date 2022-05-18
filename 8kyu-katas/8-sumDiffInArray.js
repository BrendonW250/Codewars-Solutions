// Your task is to sum the differences between 
// consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

function sumOfDifferences(arr){
    // if arr holds 0-1 elements return 0
    if (arr.length <= 1){
        return 0
    }

    let diff = 0
    let sorted = arr.sort((a,b) => a-b)
    let flip = sorted.reverse()

    for (let i=0; i<flip.length; i++){
        for (let j=1; j<flip.length; j++){
            diff = flip[i] - flip[j]
        }
        return diff
    }
}