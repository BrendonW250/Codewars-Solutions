// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad 
// ideas 'bad'. If there are one or two good ideas, return 'Publish!',
//  if there are more than 2 return 'I smell a series!'. 
//  If there are no good ideas, as is often the case, return 'Fail!'.

// x is an array
// checking if the string 'good' or 'bad' is in the array

// here is the solution
function well(x){
    // filter out any 'good' found and put it into a new array
    let goodIdeas = x.filter(i => {
        if(i === 'good'){
            return i
        }
    })

    // see how many 'good' was found
    const howMany = goodIdeas.length

    // conditions on what to return for each condition
    if (howMany > 2){
        return 'I smell a series!'
    }
    if (howMany > 0){
        return 'Publish!'
    }

    return 'Fail!'
}