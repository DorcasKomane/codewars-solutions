// Write a function that accepts an integer n and a string s 
// as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// FUNDAMENTALS STRINGS

function repeatStr (n, s) {

    //SOLUTION #1
    let string = ``;

    for(let i = 0; i < n; i++){
        string += s;
    }
    return string;

    //SOLUTION #2
    //return s.repeat(n);
}

console.log(repeatStr(2, "ha "));