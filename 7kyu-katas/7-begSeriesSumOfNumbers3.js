// Given two integers a and b, which can be positive 
// or negative, find the sum of all the integers between
//  and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// function getSum(a,b){
//     let sum = 0

//     if (a == b){
//         return a
//     }else if(a < b){
//         for (let i=a; i<=b; i++){
//             sum += i
//         }
//     }else if (a > b){
//         for (let j=b; j<=a; j++){
//             sum += j
//         }
//     }
//     return sum
// }

// Basically you start generating the sum of these
// two variables from whichever variable is less

function getSum(a,b){
    let sum = 0
    // if they equal
    if (a == b){
        return a
    }else if (a < b){
        for (let i=a; i<=b; i++){
            sum += i
        }
    }else if (a > b){
        for (let j=b; j<=a; j++){
            sum += j
        }
    }

    return sum
}