// Complete the function that accepts a string parameter, 
// and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
  //   turning string to arr
    let toArr = str.split('')
    
  //  reversing the arr
    let reverse1 = toArr.reverse()
    
  //   turning arr back to str
    let comeTogether = reverse1.join('')
    
  //   reversing the new str
    let reverse2 = comeTogether.split(' ')
    
    let final = reverse2.reverse()
    
    return final.join(' ')
  }