// The main idea is to count all the occurring characters in a string. 
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {

    //solution #1
    // if(string === ''){
    //     return {};
    // }

    // let str = string.split('');

    // let count = str.reduce((map, char) => {
    //     map[char] = (map[char] || 0) + 1;

    //     return map;
    // }, {}); 

    // return count;

    //solution #2
    const occurrences = {};
    for (let i = 0; i < string.length; i++){
        const ch = string[i];
        if(!occurrences[ch]){
            occurrences[ch] = 0;
        }

        occurrences[ch]++;
    }

    return occurrences;
}

console.log(count('aba'));