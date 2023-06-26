// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//my solution:
function fakeBin(x){
    let str1 = x.replace(/[0-4]/g, '0');
    newStr = str1.replace(/[5-9]/g, '1');

    return newStr;
}
console.log(fakeBin('45385593107843568'));