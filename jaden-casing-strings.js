String.prototype.toJadenCase = function () {
    let strArr = this.split(" "); //'this' keyword refers to the string object in question
    
    let newArr = [];
   
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
  };

  console.log(String.prototype.toJadenCase()); 