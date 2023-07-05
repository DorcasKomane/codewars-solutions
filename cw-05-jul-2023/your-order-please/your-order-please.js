// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


//my solution:
function order(words){

    let wordsArr = words.split(' ');

    let arrOfWordArrays = [];
    let position = [];

    for(let i = 0; i < wordsArr.length; i++){
        let word = wordsArr[i].split('');
        arrOfWordArrays.push(word);
    }

    for(let i = 0; i < arrOfWordArrays.length; i++){
        for(let j = 0; j < arrOfWordArrays[i].length; j++){
            
          switch(arrOfWordArrays[i][j]){
            case '1':
                position.push(1);
                break;
            case '2':
                position.push(2);
                break;
            case '3':
                position.push(3);
                break;
            case '4':
                position.push(4);
                break;
            case '5':
                position.push(5);
                break;
            case '6':
                position.push(6);
                break;
            case '7':
                position.push(7);
                break;
            case '8':
                position.push(8);
                break;
            case '9':
                position.push(9);
                break;
            default:
                break;
            }
        }
    }

    let newArray = [];

    for(let i = 0; i < wordsArr.length; i++){
        newArray[position[i]] = wordsArr[i];
    }

    newArray.shift();

    return newArray.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));