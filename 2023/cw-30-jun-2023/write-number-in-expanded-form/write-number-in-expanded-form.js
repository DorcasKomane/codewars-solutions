// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

//my solution:
function expandedForm(num) {
    let numStr = num.toString();
    let numArr = numStr.split('');
    let multiplier = 1;
    let newArr = [];

    for(let i = numArr.length - 1; i >= 0; i--){
        let value = numArr[i] * multiplier;

        if(value !== 0){
            newArr.push(value.toString());
        }
        multiplier *= 10;
    }
    return newArr.reverse().join(' + ');
}

console.log(expandedForm(70304));
