// Task

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    const regex = /[a-zA-Z]/;
    let arr = str.split('');
    let finalArr = [];

    arr.map( e => {
        if(regex.test(e)){
            finalArr.push(e);
        }
    });

    return finalArr.reverse().join('');
    
}

console.log(reverseLetter("krishan"));