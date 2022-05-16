// Given two integer arrays a, b, 
// both of length >= 1, create a program that returns true 
// if the sum of the squares of each element in a is strictly
//  greater than the sum of the cubes of each element in b.


function arrayMadness(a,b){
    let squared = a.map(element => element * element)
    let cubed = b.map(i => i*i*i)

    if (squared.reduce((acc,c) => acc+c) > cubed.reduce((acc,c) => acc+c)){
        return true
    }else {
        return false
    }
}