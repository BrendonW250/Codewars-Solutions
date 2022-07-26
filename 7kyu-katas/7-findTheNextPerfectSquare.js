DESCRIPTION:
// You might know some pretty large perfect squares. 
// But what about the NEXT one?

// Complete the findNextSquare method that finds the next 
// integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such 
// that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should
//  be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq){

    // find out whether the inputted number is 
    // an integer
    // move onto the next number that follows that 
    // inputted number
    if (Number.isInteger(Math.sqrt(sq)) == true){
        sq++

        // since the sqrt of the input is a number
        // if any inputted number that's greater than sq
        // and is also a perfect square return that number
        for (let i=sq; sq>0; i++){
            if (Number.isInteger(Math.sqrt(i)) == true){
                return i
                // return false
            }
        }
        // if the number isn't a perfect square 
        // return -1
    }else {
        return -1
    }
}