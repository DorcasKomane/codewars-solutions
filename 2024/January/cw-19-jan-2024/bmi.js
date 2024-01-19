// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// FUNDAMENTALS

function bmi(weight, height) {
    const bmi = weight / (height * height);
    let output = " ";
    
    if(bmi <= 18.5){
        output = `Underweight`;
    }else if(bmi <= 25.0){
        output = `Normal`;
    }else if(bmi <= 30.0){
        output = `Overweight`;
    }else{
        output = `Obese`;
    }
  
    return output;
}

console.log(bmi(80, 1.80));