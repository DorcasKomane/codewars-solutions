//In this exercise, a string is passed to a method 
//and a new string has to be returned with the first 
//character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, 
//with exactly 1 space between words, and no 
//leading/trailing spaces.


function makeString(s){
    const strArr  = s.split(' ');
    let newStr = '';

    for(let i = 0; i < strArr.length; i++){
        newStr += strArr[i].charAt(0);
    }
    return newStr;
}

console.log(makeString("brown eyes are nice"));