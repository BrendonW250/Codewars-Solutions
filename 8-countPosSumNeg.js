function countPositivesSumNegatives(input) {
    let counter = 0
    let newArr = []
    let sum = 0
    
    for (i = 0; i < input.length; i++){
      if (input[i] > 0){
        counter += 1
      }else if(input[i] == 0){
        continue
      }else {
        sum += input[i]
      }
      
    }
  newArr.push(counter, sum)
  return newArr
}