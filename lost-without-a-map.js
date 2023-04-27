// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//my solution WITHOUT map method:
function maps(x){
    let doubledArr = [];
    
    for(let i = 0; i < x.length; i++){
      doubledArr.push(x[i] * 2);
    }
    
    return doubledArr;
  }

  //my solution WITH map method:
  function maps(x){
    return x.map(x => x * 2);
  }