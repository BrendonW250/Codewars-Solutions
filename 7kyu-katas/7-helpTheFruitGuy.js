// Our fruit guy has a bag of fruit (represented as an array of strings)
//  where some fruits are rotten. He wants to replace all the rotten pieces 
//  of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] 
//  the replaced array should be ["apple","banana","apple"]. Your task is to implement
//   a method that accepts an array of strings containing fruits should returns an
//    array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// function removeRotten(bagOfFruits){
//     let arr = []

//     for (let i=0; i<bagOfFruits.length; i++){
//         if (bagOfFruits[i].includes('rotten')){
//             arr.push(bagOfFruits[i].substring(6).toLowerCase())
//         }else {
//             arr.push(bagOfFruits[i])
//         }
//     }
//     return arr
// }
function removeFruits(bag){

    let result = []
 
    for (let i=0; i<bag.length; i++){
        if (bag[i].includes('rotten')){
            //substring() returns the substring between 0 and the number you put in parenthesis
            //or the between the two numbers (0,6)
            result.push(bag[i].substring(6).toLowerCase())
        }else{
            result.push(bag[i])
        }
    }
    return result
}