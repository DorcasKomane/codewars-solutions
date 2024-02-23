// Very simple, given a number (integer / decimal / both depending 
// on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// FUNDAMENTALS

function opposite(number) {
    return number === 0 ? 0 : number * (-1);
}

console.log(opposite(1));
console.log(opposite(0));