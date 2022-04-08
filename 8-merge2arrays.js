
// Correct Solution
// function mergeArrays(arr1,arr2){
//     arr1.sort((a,b) => a-b)
//     arr2.sort((a,b) => a-b)

//     let arr3 = arr1.concat(arr2)
//     arr3.sort((a,b) => a-b)

    // return arr3.filter((item,pos,self) => self.indexOf(item) == pos)
// }


// Merging 2 sorted arrays and then combining them in a new array

// function mergeArrays(arr1,arr2){
//     // sorting the 2 arrays 
//     arr1.sort((a,b) => a-b)
//     arr2.sort((a,b) => a-b)

//     let arr3 = arr1.concat(arr2)
//     arr3.sort((a,b) => a-b)

//     // This line handles duplicates
//     return arr3.filter((item,pos,self) => self.indexOf(item) == pos)

// }

function mergeArrays(arr1,arr2){
    // sort arrays
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)
    
    // combine the 2 arrays
    let arr3 = arr1.concat(arr2)

    // sort the new array
    arr3.sort((a,b) => a-b)

    // filtering out duplicates
    // determines whether or not an item is already in the array
    return arr3.filter((item,pos,self) => self.indexOf(item) == pos)

    
}





mergeArrays([2,7,98,8], [1,2,8,3,9])



// mergeArrays([1,4,6], [2,3,5])
// PREP method {An interview strategy}
// P = Any Parameters {Ex. any special characters, strings, etc}
// R = Return {What are you trying to get out of it}
// E = Examples {few examples based on the problem}
// P = Psuedocode
// function mergeArrays(arr1,arr2){
//     // sort each array seperately
//     let sorted1 = arr1.sort((a,b) => a-b)
//     let sorted2 = arr2.sort((a,b) => a-b)

    // loop through each array and compare which index is greater to put in new array
//     for (let i=0; i<sorted1.length; i++){
//         for (let j=0; j<sorted2.length; j++){
//             let newArr = []

//             if (sorted1[i] < sorted2[j]){
//                 newArr.push(sorted1[i])
//             }else if(sorted1[i] > sorted2[j]){
//                 newArr.push(sorted2[j])
//             }
//         }
//         console.log(newArr)
//     }
// }
// 2 parameters arr1 and arr2
// trying to combine 2 sorted arrays and return the 1 big array
// Examples => [1,2,3,4,5] [6,7,8,9,10] => [1,2,3,4,5,6,7,8,9,10]

