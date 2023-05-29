function abbrevName(name){
    let arrName = name.split(' ');
    let firstLetter = arrName[0].charAt(0).toUpperCase();
    let secondLetter = arrName[1].charAt(0).toUpperCase();
    
    return (`${firstLetter}.${secondLetter}`);
}

console.log(abbrevName('dorcas komane'));