// The main idea is to count all the occurring characters in a string. 
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    if(string === ''){
        return {};
    }
    //split string into array in order to apply array methods
    let str = string.split('');

    //apply reduce and map methods
    let count = str.reduce((map, char) => {
        map[char] = (map[char] || 0) + 1;

        return map;
    }, {}); 

    return count;
}

console.log(count('aba'));