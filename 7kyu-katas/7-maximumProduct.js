// Task 
 
// Given an array of integers. Find the maximum product obtained from
// multiplying 2 adjacent numbers in the array 

function adjacentElement(array){
    let newArr = []

    //loop through the array and push the product of the first & second element
    for (let i=0; i<array.length-1; i++){
        newArr.push(array[i] * array[j]) 
    }

    //now spread the new arr and return the max in that array
    return Math.max(...newArr)
}