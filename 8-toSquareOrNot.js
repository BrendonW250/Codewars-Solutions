
// Write a method, that will get an integer array as 
// parameter and will process every number from this array.

// Return a new array with 
// processing every number of the input-array like this:
// If the number has an integer 
// square root, take this, otherwise square the number.

// Repitition
function squareOrSquareRoot(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (Math.sqrt(arr[i]) % 1 === 0){
            newArr.push(Math.sqrt(arr[i]))
        }else{
            newArr.push(Math.pow(arr[i], 2))
        }
    }
    return newArr 
}

// function squareOrSquareRoot(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (Math.sqrt(arr[i] % 1 === 0)){
//             newArr.push(Math.sqrt(arr[i]))
//         }else {
//             newArr.push(Math.pow(arr[i], 2))
//         }
//     }
//     return newArr
// }

// solution 
// function squareOrSquareRoot(arr){
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if (Math.sqrt(arr[i] % 1 === 0)){
//             newArr.push(Math.sqrt(arr[i]))
//         }else{
//             newArr.push(Math.pow(arr[i], 2))
//         }
//     }
//     return newArr
// }