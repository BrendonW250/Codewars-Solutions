// Your job is to figure out the index of which vowel is missing from 
// a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and
//  every sentence given will contain all vowels but one. Also, 
//  you won't need to worry about capitals.

function absentVowel(x){
    let vowels = ['a','e','i','o','u']
    let toArr = x.split('')

    for (let i=0; i<vowels.length; i++){ 
        //goes through each element in toArr array and compares those vowels present
        //with the vowels in the vowels array 
        //if it is included it returns true 
        //if not return the index of the vowel that isn't present
        if (toArr.includes(vowels[i]) !== true){
            return i
        }
    }
}