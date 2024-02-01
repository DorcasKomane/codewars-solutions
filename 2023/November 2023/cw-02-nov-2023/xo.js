// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let noOfXs = 0;
    let noOfOs = 0;

    for(let i = 0; i < str.length; i++){
        // console.log(str[i]);
        if(str[i] === 'x' || str[i] === 'X'){
            noOfXs++;
        }
        if(str[i] === 'o' || str[i] === 'O'){
            noOfOs++;
        }
    }

    return noOfXs === noOfOs;
}

console.log(XO("xxxm"));