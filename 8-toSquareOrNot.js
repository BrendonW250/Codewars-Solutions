

// solution 
function squareOrSquareRoot(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if (Math.sqrt(arr[i] % 1 === 0)){
            newArr.push(Math.sqrt(arr[i]))
        }else{
            newArr.push(Math.pow(arr[i], 2))
        }
    }
    return newArr
}