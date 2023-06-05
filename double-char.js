// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    str = str.split('');
    const newStr = [];

    str.forEach(char => {
        newStr.push(char.repeat(2));
    });

    return newStr.join('');
  }

  console.log(doubleChar("String"));