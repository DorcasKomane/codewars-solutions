// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// FUNDAMENTALS

function peopleWithAgeDrink(age) {
    let category = ``;

    if(age < 14){
        category = `kids`;
    }else if(age < 18){
        category = `teens`;
    }else if(age < 21){
        category = `young-adults`;
    }else{
        category = `adults`;
    }

    switch(category){
        case 'kids':
            return `drink toddy`;
        case 'teens':
            return `drink coke`;
        case 'young-adults':
            return `drink beer`;
        case 'adults':
            return `drink whisky`;
        default:
            return 'invalid age';
    }
    
};

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));