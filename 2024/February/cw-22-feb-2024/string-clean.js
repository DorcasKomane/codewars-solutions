// Your boss decided to save money by purchasing some cut-rate optical character 
// recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws 
// in a lot of numbers at random places in the text.

// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text 
// and remove all of the numbers. Your program will take in a string and clean out all 
// numeric characters, and return a string with spacing and special 
// characters ~#$%^&!@*():;"'.,? all intact.

// REGULAR EXPRESSIONS FUNDAMENTALS STRINGS

function stringClean(s){
    const regex = /[a-zA-Z]/g;
    const specialChar = /[^a-zA-Z]+/
    const numbers = '123456789'
    let newArr = [];

    if(!s.match(regex)){
       return s;
    }else{
        for(let i = 0; i < s.length; i++){
            if(numbers.indexOf(s[i]) === -1){
                newArr.push(s[i])
            }
        }
    }

    return newArr.join('');
}

console.log(stringClean(""));
console.log(stringClean("! !"));
console.log(stringClean("123456789"));
console.log(stringClean("(E3at m2e2!!)"));
