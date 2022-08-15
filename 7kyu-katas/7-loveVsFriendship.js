// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
    //your code here
    let letters = ['a','b','c','d','e','f','g','h','i',
                  'j','k','l','m','n','o','p','q','r','s','t'
                  ,'u','v','w','x','y','z']
    
    let arr = []
    
    for (let i=0; i<letters.length; i++){
      for (let j=0; j<string.length; j++){
        if (letters[i] == string[j]){
          arr.push(i+1)
        }
      }
    }
    return arr.reduce((acc,c) => acc+c)
  }
