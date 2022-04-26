// Take an array and remove every 2nd element
// from the array

function removeEveryOther(arr){
    for (let i=0; i<arr.length-1; i++){
        arr.splice(i+1, 1)
        
    }
    return arr
}

// removeEveryOther(["hello", "how", "are", "you"])