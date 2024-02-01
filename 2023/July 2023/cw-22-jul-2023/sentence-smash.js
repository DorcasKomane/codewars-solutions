// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//solution:
function smash (words) {

    //solution #1
    if(words.length === 0){
        return '';
    }

    let sentence = '';

    for(let i = 0; i < words.length; i++){
        if(i === 0){
            sentence += `${words[i]}`;
        }else{
            sentence += ` ${words[i]}`;
        }
    }

    return sentence;


    //solution #2
    // return words.join(' ');
};

console.log(smash(["hello", "amazing", "world"]));