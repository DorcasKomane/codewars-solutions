//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    s = s.split('');
    const newStr = [];

    s.forEach(char => {
        if(char !== '!'){
            newStr.push(char);
        }
    });

    return newStr.join('');
  }

  console.log(removeExclamationMarks('Hello World!'));