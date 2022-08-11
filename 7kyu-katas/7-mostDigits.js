// Find the number with the most digits
// If two numbers in the argument array have the same
// number of digits return the first one in the array

function findLongest(array){

    // set this as a basis of comparing each element to it later 
    let num = '0'

    for (let i=0; i<array.length; i++){
        let string = array[i].toString() //turn every element in the array to a string
        if (string.length > num.length){ //if the element has more digits than num, that element becomes the new num
            num = string //element becomes new num here 
        }
    }
    return parseInt(num) //converting the string with the most digits back to a integer
}


function findLongest(array){

    let num = '0'

    for (let i=0; i<array.length; i++){
        let string = array[i].toString()

        if (string > num){
            num = string
        }
    }
    return parseInt(num)
}