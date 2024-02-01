// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//my solution:
function reverseWords(str) {
   let strArr = str.split(/(\s)/); //using regex to specify space character as the splitting point
   let wordArr = [];
   let reversedWord = '';
   for(let i = 0; i < strArr.length; i++){
       reversedWord = strArr[i].split('').reverse().join(''); //inside the array we split individual words into sub-arrays, reverse them, and join the characters back together
       wordArr.push(reversedWord);
   }
   return wordArr.join('');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
  