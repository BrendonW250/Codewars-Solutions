// Complete the function/method so that it returns the
//  url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    // TODO: complete
  
  //   change the string to an array
    let toArr = url.split('')
  //   set a to equal the index of the element '#'
    let a = toArr.indexOf('#')
    
  //   if the element '#' doesn't exist in array
  //   change array back to string and return it
    if (toArr.indexOf('#') == -1){
      return toArr.join('')
    }else{
  //     otherwise remove '#' and everything after it
      toArr.splice(a)
    }
  //   change modified array back to string and return it
    return toArr.join('')
  }