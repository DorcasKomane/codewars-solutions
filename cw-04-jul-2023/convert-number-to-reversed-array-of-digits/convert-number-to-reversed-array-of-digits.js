// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

//my solution:
console.log('testing')
function digitize(n) {
    let reverseArr = n.toString().split('').reverse();
    let digitArr = [];
    for(let i =0; i < reverseArr.length; i++){
        reverseArr[i] = parseInt(reverseArr[i]);
        digitArr.push(reverseArr[i]);
    }
    return digitArr;
}

console.log(digitize(35231));