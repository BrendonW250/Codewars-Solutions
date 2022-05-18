// Given an array of Boolean values and a logical operator, 
// return a Boolean result based on sequentially applying the 
// operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False

function logicalCalc(array, op){
    // use a switch, case statements
    switch(op){
        case 'AND':
            return array.reduce((acc,c) => acc && c)
            break;

        case 'OR':
            return array.reduce((acc,c) => acc || c)
            break;

        case 'XOR':
            return array.reduce((acc,c) => acc != c)
            break;
    }
}