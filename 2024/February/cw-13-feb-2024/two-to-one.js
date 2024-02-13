// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing 
// distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// FUNDAMENTALS

function longest(s1, s2) {
    let newStr = ``;
    let stringArr = [...s1,...s2].sort();

    for(let i = 0; i < stringArr.length; i++){
        if(newStr.indexOf(stringArr[i]) === -1){
            newStr += stringArr[i];
        }
    }
    
    return newStr;
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));