// review anki card for this

function validatePIN (pin) {
    // checking the length of the string on if it's
    // equal to 4 or 6
    if (pin.length !== 4 && pin.length !== 6){
      return false
    }
    
    // checking if each element is less than '0' or greater than '9'
    for (let i=0; i<pin.length; i++){
      if (pin[i] < '0' || pin[i] > '9'){
        return false
      }
    }
    return true
  }