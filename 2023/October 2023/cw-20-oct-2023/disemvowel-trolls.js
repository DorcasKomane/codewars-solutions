// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the 
// vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a 
// new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would 
// become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// STRINGS REGULAR EXPRESSIONS FUNDAMENTALS

function disemvowel(str) {
    //*** SOLUTION #1 using arrays ***

    const vowels = ['a', 'e', 'i', 'o', 'u', 
                    'A', 'E', 'I', 'O', 'U'];
    const arrStr = str.split('');
    const newArr = [];

    for(let i = 0; i < arrStr.length; i++){
        if(vowels.indexOf(arrStr[i]) === -1){
            newArr.push(arrStr[i]);
        }
    }
    return newArr.join('');

    //*** SOLUTION #2 using regular expression ***

    // return str.replace(/[aeiouAEIOU]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"));