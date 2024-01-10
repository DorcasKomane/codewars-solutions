// If you can't sleep, just count sheep!!

// Task:

// Given a non-negative integer, 3 for example, return a string 
// with a murmur: "1 sheep...2 sheep...3 sheep...". Input will 
// always be valid, i.e. no negative integers.

// FUNDAMENTALS STRINGS

const countSheep = function(num){
    
    let string = [];
    
    for(let i = 1; i <= num; i++){

        string.push(`${i} sheep...`);
        
    }

    return string.join('');

}

console.log(countSheep(3));