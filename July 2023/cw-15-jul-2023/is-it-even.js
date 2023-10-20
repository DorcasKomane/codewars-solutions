// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


//my solution:
function testEven(n) {
    let isEven = true;
    let checkFloat = String(n).split('.');
    
    if(checkFloat[1] > 0){
        isEven = false;
    }else if(n % 2 === 0){
        isEven = true;
    }else{
        isEven = false;
    }
    return isEven;
}

console.log(testEven(1));