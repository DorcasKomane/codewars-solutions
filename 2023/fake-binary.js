// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//my solution:
function fakeBin(x){
    //solution #1
    //let newStr = x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
    //return newStr;

    //solution #2
    let xArr = x.split('');

    function binary(item){
        if(item < 5){
            return '0';
        }else if(item >= 5){
            return '1';
        }
    }

    let newStr = xArr.map(binary);

    return newStr.join('');
}
console.log(fakeBin('45385593107843568'));