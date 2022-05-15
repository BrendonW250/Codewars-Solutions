

// Write a function that takes a list of strings as an 
// argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, 
// which is pre-populated in your solution:



function gooseFilter(birds){
    let newArr = []
    let geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']

    for (let i=0; i<birds.length; i++){
        if(!geese.includes(birds[i])){
            newArr.push(birds[i])
        }
    }
    return newArr
}