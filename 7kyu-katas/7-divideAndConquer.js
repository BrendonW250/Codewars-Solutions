// Given a mixed array of number and string 
// representations of integers, add up the string
//  integers and subtract this from the total of the non-string integers.

// Return as a number.


function divCon(x){

    let sumReg = 0
    let sumString = 0
    let stringArray = []
    let regArray = []
    
    for (let i=0; i<x.length; i++){
      if (typeof x[i] == 'string'){
        stringArray.push(parseInt(x[i]))
      }else if (typeof x[i] == 'number'){
        regArray.push(x[i])
      }
    }
    
    //0 is for initial value
    sumString = stringArray.reduce((acc,c) => acc+c,0)
    
    sumReg = regArray.reduce((acc,c) => acc+c,0)
    
    return sumReg - sumString
  }
