// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same 
// character sequences except the first and the last ones but
//  this time separated by spaces.

// If the input string is empty or the removal of the 
// first and last items would cause the resulting string to be empty, 
// return an empty value (represented as a generic value NULL in the examples below).'

// .split(',') - changes the string to an array
// .slice(1, -1) - excludes the first and the last element from being in the new array
// .join(' ') - converts the array back to a string and includes a space between each element
// || null - returns the value of whatever the function on the left generates or returns null

let array = arr => arr.split(',').slice(1, -1).join(' ') || null