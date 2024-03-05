// Write a function that takes an array of strings as an argument and returns a 
// sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different 
// lengths, so you will not have to decide how to order multiple strings of 
// the same length.

// SORTING ARRAYS FUNDAMENTALS

function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
   let arr = [];
   let obj = {};

   for(let i = 0; i < array.length; i++){
    let len = array[i].length;

    obj[len] = array[i];

   }

   for(len in obj){
    arr.push(obj[len]);

   }

    return arr;
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));