// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the 
// lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even 
// if there are more than one with the same value.

// Mind the input validation.

// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
// or the given array is an empty list or a list with only 1 element, return 0.

// FUNDAMENTALS


function sumArray(array) {
    // Validate the input
    if(!array || array.length === 0 || array.length === 1 || array.length === 2){
        return 0;
    }

    // Find the minimum and maximum values in the array
    let min = Math.min(...array);
    let max = Math.max(...array);
  
    // Flag variables to track whether min and max have been excluded
    let minExcluded = false;
    let maxExcluded = false;
  
    // Sum all numbers excluding the first occurrence of min and max
    let sum = array.reduce((acc, num) => {
      if (num === min && !minExcluded) {
        minExcluded = true;
      } else if (num === max && !maxExcluded) {
        maxExcluded = true;
      } else {
        return acc + num;
      }
      return acc;
    }, 0);
  
    return sum;
  }

console.log(sumArray(null));
console.log(sumArray([ ]));
console.log(sumArray([ 3, 5 ]));
console.log(sumArray([ 6, 2, 1, 8, 10 ]));
console.log(sumArray([ 0, 1, 6, 10, 10 ]));