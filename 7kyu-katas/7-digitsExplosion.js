// Given a string made of digits [0-9], return a 
// string where each digit is repeated a number of 
// times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

function explode(s){
  
    let arr = s.split('')
    let result = []
    
    for (let i=0; i<arr.length; i++){
      if (arr[i] == '1'){
        result.push('1')
      }else if (arr[i] == '2'){
        result.push('22')
      }else if (arr[i] == '3'){
        result.push('333')
      }else if (arr[i] == '4'){
        result.push('4444')
      }else if (arr[i] == '5'){
        result.push('55555')
      }else if (arr[i] == '6'){
        result.push('666666')
      }else if (arr[i] == '7'){
        result.push('7777777')
      }else if (arr[i] == '8'){
        result.push('88888888')
      }else if (arr[i] == '9'){
        result.push('999999999')
      }
    }
    return result.join('')
  
    
   
        
    
    // return arr
    
  
  }