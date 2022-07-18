// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, 
// the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, where the first one is 
// the total weight of team 1, and the second one is the total weight 
// of team 2.

function rowWeights(array){
    //your code here
    let team1 = []
    let team2 = []
    let result = []
    let ifTwoIsEmpty = 0
    
  //   if index is divisible by 2 push that element to team 1
  //   else push that element to team 2
    for (let i=0; i<array.length; i++){
      if (i % 2 == 0){
        team1.push(array[i])
      }else {
        team2.push(array[i])
      }
    }
    
  //   if there is no team 2
  //   push 0 to team 1
    if (team2.length == 0){
      team1.push(ifTwoIsEmpty)
      return team1
    }
    
  //   calculating the sum of both teams
    let sum1 = team1.reduce((acc,c) => acc+c)
    let sum2 = team2.reduce((acc,c) => acc+c)
    
  //   pushing the result of both teams to one array
    result.push(sum1)
    result.push(sum2)
    
    return result
  }
