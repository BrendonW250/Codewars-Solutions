// Given a string made up of letters a, b, and/or c, 
// switch the position of letters a and b (change a to
//      b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
    let arr = []
    let result = x.split('')

    for (let i=0; i<result.length; i++){
        if (result[i] == 'b'){
            arr.push('a')
        }else if (result[i] == 'a'){
            arr.push('b')
        }else {
            arr.push('c')
        }
    }
    return arr.join('')
}

//still works if you switch the if (result[i] =='a') in the first if statement