// It's pretty straightforward. Your goal is to create a function 
// that removes the first and last characters of a string. You're
//  given one parameter, the original string. You don't have to worry 
//  with strings with less than two characters.

function removeChar(str){
    let toArr = str.split('')
    let firstEl = toArr.splice(0,1)

    let lastEl = toArr.pop()

    return toArr.join('')
}