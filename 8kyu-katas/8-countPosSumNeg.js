function countPositivesSumNegatives(input) {
    let counter = 0
    let newArr = []
    let sum = 0
    
  //  validating the input
    if (input === null || input.length === 0){
      return newArr
    }

    for (let i=0; i<input.length; i++){
      if (input[i] > 0){
        counter++
      }else if(input[i] == 0){
        continue
      }else if(input[i] < 0){
        sum += input[i]
      }
    }

    // preparing the output
    newArr.push(counter)
    newArr.push(sum)

    return newArr
  
}