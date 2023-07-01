// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


//my solution:
function findOdd(A) {
   let count = {};

   for(let elem of A){
        if(count[elem]){ //if element already appeared (has already been counted), increment the count
            count[elem] += 1;
        }else{
            count[elem] = 1; //if it is appearing for the first time, set count to 1
        }
    }
    for(const key in count){
            if(`${count[key]}` % 2 !== 0){
            return parseInt(`${key}`);
        }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));