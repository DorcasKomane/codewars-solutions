// Create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. 
//You don't have to worry with strings with less than two characters.

//my solution:

function removeChar(str){
    let newString = str.substring(1);
    newString = newString.substring(0, newString.length - 1);
    
    return newString;
  };
  