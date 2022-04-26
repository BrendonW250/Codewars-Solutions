
// Return a new array consisting of elements which are
//  multiple of their own index in input array (length > 1).

function multipleOfIndex(arr){
    let newArr = []

    for (let i=0; i<arr.length; i++){
        if (arr[i] % i === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}