// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    const regex = /[aeiouAEIOU]/g;
    return s.replace(regex, '!');
    
}

console.log(replace("Hi!"));