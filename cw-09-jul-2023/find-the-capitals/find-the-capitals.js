// Write a function that takes a single string (word) as argument. 
//The function must return an ordered list containing the indexes 
//of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//my solution:
const capitals = function (word) {
    let indexes = [];
    let regex = /[A-Z]/;

	for(let i = 0; i < word.length; i++){
        if(word[i].match(regex)){
            indexes.push(i);
        }
    }

    return indexes;
};

console.log(capitals('CodEWaRs'));