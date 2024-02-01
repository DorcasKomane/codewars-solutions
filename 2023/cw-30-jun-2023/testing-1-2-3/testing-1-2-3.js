// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


//my solution:
const number = function(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push((i + 1) + ": " + array[i]);
    }
    return newArr;
}

console.log(number(["a", "b", "c"]));
console.log(number(['[', 'u', 'j', 'D', 'V', 'T', 'O', 'B', 'B', 'H', '[', '[', 'j', 'r', 'c', 'I', 'G', 'b', 'W', 'z', 'M', 't', 'h', 'L', 'v', 'F', 'R', 'X', 'y', 'w', 'T', 'e', 'r', 'D', 's', 'K', 'F', 'V', 'j', 'A', 'R', 'E', 'g', 'K', 'x', 'H', 'k', 'z', 'C', 'l', 'A', 'K', 'J', 'O', 'S', 'F', 'N', 'C', '[', 'T', 'P', 'W', 'c', 'G', 'e', 'n', 'f', 'R', 'w', 'o', 't', 'w', 'M', 'Y', 'r', 't', 'Z', 'G', 'q', 't', 'N', 'q', 'h', 'p', '[', 'D', 'j', 'S', 'I', 'g', 'y', 'U', 'I', 'k', 'G', 'f', 'y', 'W', 'g', 'U']))