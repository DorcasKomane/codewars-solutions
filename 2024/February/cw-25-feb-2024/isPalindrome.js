// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the 
// same backwards as forwards, such as madam or racecar.

// FUNDAMENTALS

function isPalindrome(x) {
    let xLower = x.toLowerCase();

    return xLower === xLower.split('').reverse().join('');
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("Bob"));