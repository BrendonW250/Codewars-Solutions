// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let toArr = str.split('')

    let reverse = toArr.reverse()

    return reverse.join('')
}