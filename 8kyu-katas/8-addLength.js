
// What if we need the length of the words separated by a space to be added at the end of that same word and 
// have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and 
// returns an Array/list with the length of each word added to each element .

function addLength(str){
    // turn the string into an array of strings
    let split = str.split(" ")
    let result = []

    // loop through each string in the arr
    for(let i=0; i<split.length; i++){
        // push string into result array with each words length
        result.push(split[i] + " " + split.length)
    }
    return result
}

