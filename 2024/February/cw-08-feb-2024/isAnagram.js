// An anagram is the result of rearranging the letters of a word to 
// produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given 
// are anagrams of each other; return false otherwise.

// Examples

// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// STRINGS FUNDAMENTALS

const isAnagram = function(test, original){
    if(test.length !== original.length){
        return false;
    }else{
        const originalLower = original.toLowerCase().split('');
        const testLower = test.toLowerCase().split('');
        
        console.log(originalLower.sort());
        console.log(testLower.sort());

        for(let i = 0; i < originalLower.length; i++){
            if(testLower[i] !== originalLower[i]){
                return false;
            }
        }
    }
    return true;
};

console.log(isAnagram("eCfsDAxonenCmUa", "smDCxUPAeoannef"));