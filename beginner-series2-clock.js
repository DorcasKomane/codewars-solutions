// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


//my solution:
function past(h, m, s){
   
    let hours = 3600000;
    let minutes = 60000;
    let seconds = 1000;
    
    if(h >= 0 && h <= 23){
      h *= hours;
    }
    if(m >= 0 && m <= 59){
      m *= minutes;
    }
    if(s >= 0 && s <= 59){
      s *= seconds;
    }
    
    let timeSinceMidnight = h + m + s;
  
    return timeSinceMidnight;
    
  }
  
  console.log(past(4, 1, 1));