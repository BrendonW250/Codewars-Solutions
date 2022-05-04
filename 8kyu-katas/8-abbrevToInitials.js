
// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// Explanation:
// first convert the string to an array
// then loop through the array to make the first elements
// in the array uppercase
// then put them back together and return it as the first two letters uppercase with . 


// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

function abbrevName(name){
    return name.split(' ')
                .map(i => i[0].toUpperCase()).join('.')
}