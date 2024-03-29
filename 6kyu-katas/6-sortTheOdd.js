// Task
// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending
//  order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array){
    let odd = []

    for (let i=0; i<array.length; i++){
        if (array[i] % 2 !== 0){
            odd.push(array[i])
        }
    }

    // sort the array with odd numbers
    odd.sort((a,b) => a-b)

    // loop through original array again to replace the odd numbers in that 
    // array to the new sorted odd numbers in the odd array
    for (let j=0; j<array.length; j++){
        if (array[j] % 2 !== 0){
            array[j] = odd.shift()
        }
    }
    return array
}