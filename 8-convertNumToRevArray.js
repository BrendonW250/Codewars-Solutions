// Given a random non-negative number, you have to return the digits 
// of this number within an array in reverse order
function digitize(n){
    // convert the number to a string
    let str = n.toString()

    // convert to an array and reverse the arr
    let arr = str.split('').reverse()

    // convert the str elements in the array back to integers
    return arr.map(element => Number(element))
}