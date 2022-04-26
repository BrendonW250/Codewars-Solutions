// Write a function that takes a single string (word) as argument. The function must return an ordered list
//  containing the indexes of all capital letters in the string.


function capitals(word) {
    // Write your code here
    let upperCase = ['A',  'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
                     'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'U', 'X', 'Y', 'Z']
    
    let newArr = []
    
    for (let i=0; i< word.length; i++){
      for (let j=0; j< upperCase.length; j++){
        if (word[i] === upperCase[j]){
          newArr.push(i)
        }
      }
    }
    return newArr.filter((item,pos,self) => self.indexOf(item) == pos)
  };