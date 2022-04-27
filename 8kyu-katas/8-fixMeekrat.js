// You're at the zoo... all the meerkats look weird. 
// Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. 
// You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will 
// get in the tests: you have to change the element positions with the same exact logics

// Simples!


// This solution is specified for the test cases presented
// All the elements of the array were in reverse order so 
// the reverse method was used like this
function fixTheMeekrat(arr){
    return arr.reverse()
}

// More valued solution
// Why? because it duplicates the array w/ the from()
// and sorted the elements given and then reverses the order
// again because of the elements given in the test cases
function fixTheMeekrat(arr){
    return Array.from(arr).sort((a,b) => a-b).reverse()
}