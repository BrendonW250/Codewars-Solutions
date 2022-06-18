// Take 2 strings s1 and s2 including only letters from ato z.
//  Return a new sorted string, the longest possible, containing 
//  distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    let toArr1 = s1.split('')
    let toArr2 = s2.split('')
    
    let sorted1 = toArr1.sort()
    let sorted2 = toArr2.sort()
    
    let together = sorted1.concat(sorted2)
    
    let final = together.filter((item,pos,self) => self.indexOf(item) == pos)
    
    let finalSort = final.sort()
    
    return finalSort.join('')
  }