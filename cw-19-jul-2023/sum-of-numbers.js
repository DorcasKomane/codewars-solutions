// Given two integers a and b, which can be positive or negative, 
//find the sum of all the integers between and including them and return it. 
//If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1) 
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how 
//you get that number.


//my solution:
function getSum(a, b){

   let orderedPair = [];
   let sum = 0;

   orderedPair.push(a, b);

   orderedPair.sort((a,b) => a - b);

   for(let i = orderedPair[0]; i <= orderedPair[1]; i++){
        if(orderedPair[0] === orderedPair[1]){
            return orderedPair[0];
        }else{
            sum += i;
        }
    }
    return sum;
}

console.log(getSum( 5, -1));