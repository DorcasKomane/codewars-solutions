function getCount(str) {
    let arrayStr = str.split('');
    let vowel = ' ';
    let count = 0;

    for(let i = 0; i < arrayStr.length; i++){
        vowel = arrayStr[i];

        switch(vowel){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break; 
            case 'i':
                count++;
                break; 
            case 'o':
                count++;
                break; 
            case 'u':
                count++;
                break;
            default:
                count = count;
                break;
        }
    }

    return count;
  }
