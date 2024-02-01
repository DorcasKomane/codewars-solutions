// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//my solution:
function descendingOrder(n){
    let digitStr = n.toString(); //convert number to a string
    let digitArr = digitStr.split(''); //split string into individual digits and store in an array
    let descArr = [];
   
    descArr = digitArr.sort((a,b) => b - a); //sort array elements in descending order
    
    return parseInt(descArr.join('')); //join array elements into a number
}

console.log(descendingOrder(80673));