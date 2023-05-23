String.prototype.toJadenCase = function () {
    let str = "How can mirrors be real if our eyes aren't real";
    let strArr = str.split(" ");
    
    let newArr = [];
   
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
  };

  console.log(String.prototype.toJadenCase()); 