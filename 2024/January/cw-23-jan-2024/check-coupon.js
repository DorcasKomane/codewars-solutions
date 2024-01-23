// Story

// Your online store likes to give out coupons for special occasions. 
// Some customers try to cheat the system by entering invalid codes 
// or using expired coupons.

// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code 
// is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. 
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// DATE TIME STRINGS FUNDAMENTALS

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    const months = ['January', 'February', 'March', 'April', 
                    'May', 'June', 'July', 'August', 
                    'September', 'October', 'November', 'December'];

    const currentDateMonth = currentDate.split(' ')[0];
    const currentDateDay = Number(currentDate.split(' ')[1].slice(0,-1));
    const currentDateYear = Number(currentDate.split(' ')[2]);

    const expirationDateMonth = expirationDate.split(' ')[0];
    const expirationDateDay = Number(expirationDate.split(' ')[1].slice(0,-1));
    const expirationDateYear = Number(expirationDate.split(' ')[2]);

    if(enteredCode === correctCode){
        if( currentDateYear <= expirationDateYear ){
            if( months.indexOf(currentDateMonth) <= months.indexOf(expirationDateMonth) ){
                if( months.indexOf(currentDateMonth) < months.indexOf(expirationDateMonth) ){
                    return true;
                }else if( months.indexOf(currentDateMonth) === months.indexOf(expirationDateMonth) ){
                    if( currentDateDay <= expirationDateDay ){
                        return true;
                    }
                }
            }
        } 
    }

    return false;
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));
