// Create a combat function that takes the player's current health 
// and the amount of damage recieved, and returns the player's new 
// health. Health can't be less than 0.

// FUNDAMENTALS

function combat(health, damage) {
    const result = health - damage;
    return result > 0 ? result : 0;
}

console.log(combat(100, 5));